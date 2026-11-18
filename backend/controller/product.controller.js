

import Product from "../model/product.model";
import multer from "multer";
import fs from "fs-extra";
import path from "path";

// Configure Multer for Image Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads/";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}${path.extname(file.originalname)}`;
    cb(null, filename);
  },
});

const upload = multer({ storage }).single("image"); // Accepts a single image file

export const createProduct = (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(400).json({ message: err.message });

    console.log("req.body:", req.body);
    console.log("req.file:", req.file);

    try {
      const { name, description, price, category, stock } = req.body;
      const image = req.file ? req.file.filename : "";

      const product = new Product({ name, description, price, category, stock, image });
      await product.save();

      res.status(201).json({
        message: "Product created successfully",
        product: {
          ...product._doc,
          imageUrl: image ? `http://localhost:4000/uploads/${image}` : null
        }
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
};

// export const updateProduct = (req, res) => {
//     upload(req, res, async (err) => {
//         if (err) return res.status(400).json({ message: err.message });

//         try {
//             const product = await Product.findById(req.params.id);
//             if (!product) {
//                 return res.status(404).json({ message: "Product not found" });
//             }

//             let updatedData = { ...req.body };

//             if (req.file) {
//                 const newImage = req.file.filename;

//                 if (product.image) {
//                     const oldImagePath = path.join("uploads", product.image);
//                     if (await fs.pathExists(oldImagePath)) {
//                         await fs.remove(oldImagePath);
//                     }
//                 }
//                 updatedData.image = newImage;
//             }

//             const updatedProduct = await Product.findByIdAndUpdate(
//                 req.params.id,
//                 updatedData,
//                 { new: true }
//             );

//             res.status(200).json({
//                 message: "Product updated successfully",
//                 updatedProduct: {
//                     ...updatedProduct._doc,
//                     imageUrl: updatedProduct.image ? `http://localhost:4000/uploads/${updatedProduct.image}` : null
//                 }
//             });
//         } catch (error) {
//             res.status(500).json({ message: error.message });
//         }
//     });
// };


export const updateProduct = (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(400).json({ message: err.message });

    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      // Copy all fields sent in req.body
      let updatedData = { ...req.body };

      // If a new image file is uploaded
      if (req.file) {
        const newImage = req.file.filename;

        // Remove old image from uploads folder if exists
        if (product.image) {
          const oldImagePath = path.join("uploads", product.image);
          if (await fs.pathExists(oldImagePath)) {
            await fs.remove(oldImagePath);
          }
        }

        updatedData.image = newImage;
      }

      // Update product in DB, returning updated document
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        updatedData,
        { new: true }
      );

      res.status(200).json({
        message: "Product updated successfully",
        updatedProduct: {
          ...updatedProduct._doc,
          imageUrl: updatedProduct.image
            ? `http://localhost:4000/uploads/${updatedProduct.image}`
            : null,
        },
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.image) {
      const imagePath = path.join("uploads", product.image);
      if (await fs.pathExists(imagePath)) {
        await fs.remove(imagePath);
      }
    }

    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product and image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getProducts = async (req, res) => {
  try {
    const { search, minPrice, maxPrice, sort, page = 1, limit } = req.query;
    let filter = {};

    // Name Search
    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    // Price Range Filter
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }

    // Sorting Options
    let sortOption = {};
    switch (sort) {
      case "priceLowToHigh":
        sortOption.price = 1;
        break;
      case "priceHighToLow":
        sortOption.price = -1;
        break;
      case "latest":
        sortOption.createdAt = -1;
        break;
      case "rating":
        sortOption.averageRating = -1; // assumes rating field exists
        break;
      default:
        break; // keep MongoDB default sort
    }

    // Pagination values
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Querying products
    const products = await Product.find(filter)
      .populate("category")
      .sort(sortOption)
      .skip(skip)
      .limit(parseInt(limit));

    const totalCount = await Product.countDocuments(filter);

    // Add imageUrl to each product
    const productsWithImageUrl = products.map(product => ({
      ...product._doc,
      imageUrl: product.image ? `http://localhost:4000/uploads/${product.image}` : null,
    }));

    const parsedLimit = parseInt(limit) || 12;
    const parsedPage = parseInt(page) || 1;
    const totalPages = Math.ceil(totalCount / parsedLimit) || 1;

    res.status(200).json({
      total: totalCount,
      totalPages: totalPages,
      page: parsedPage,
      limit: parsedLimit,
      count: productsWithImageUrl.length,
      products: productsWithImageUrl,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Construct the full image URL
    const imageUrl = `http://localhost:4000/uploads/${product.image}`;

    res.status(200).json({ ...product.toObject(), imageUrl });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const searchProducts = async (req, res) => {
  try {
    const { search } = req.query;

    if (!search || search.trim() === "") {
      return res.status(400).json({ success: false, message: 'Search query is required' });
    }

    const searchRegex = new RegExp(search.trim(), "i");
    console.log(searchRegex);

    const products = await Product.aggregate([
      {
        $lookup: {
          from: "categories",  
          localField: "category",
          foreignField: "_id",
          as: "category"
        }
      },
      { $unwind: "$category" },     
      {
        $match: {
          $or: [
            { name: { $regex: searchRegex } },
            { description: { $regex: searchRegex } },
            { "category.name": { $regex: searchRegex } }
          ]
        }
      }
    ]);

    if (products.length === 0) {
      return res.status(404).json({ success: false, message: "No products or categories found" });
    }

     const updatedProducts = products.map(product => ({
      ...product,
      imageUrl: `http://localhost:4000/uploads/${product.image}`
    }));


    res.status(200).json({
      success: true,
      count: products.length,
      data: updatedProducts,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};



//  Create Product	POST	/api/products	Create product with image
// Update Product	PUT	/api/products/:id	Update product + replace image
// Delete Product	DELETE	/api/products/:id	Delete product + remove image file
// Get All Products	GET	/api/products	Supports search, filter, sort, pagination
// Get One Product	GET	/api/products/:id	Get one product + populated category
