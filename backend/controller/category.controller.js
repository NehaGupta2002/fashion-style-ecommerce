// import Category from "../model/category.model";
// import Product from "../model/product.model";

// // Create a new category
// export const createCategory = async (req, res) => {
//     try {
//         const { name, description } = req.body;

//         // Check if category already exists
//         const existingCategory = await Category.findOne({ name });
//         if (existingCategory) {
//             return res.status(400).json({ message: "Category already exists" });
//         }

//         const category = await Category.create({ name, description });
//         res.status(201).json(category);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Get all categories
// export const getCategories = async (req, res) => {
//     try {
//         const categories = await Category.find();
//         res.status(200).json(categories);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Get a single category by ID
// // export const getCategory = async (req, res) => {
// //     try {
// //         const category = await Category.findById(req.params.id);
// //         if (!category) {
// //             return res.status(404).json({ message: "Category not found" });
// //         }
// //         res.status(200).json(category);
// //     } catch (error) {
// //         res.status(500).json({ message: error.message });
// //     }
// // };



// // Get a single category by ID and include its products
// export const getCategory = async (req, res) => {
//   try {
//     const categoryId = req.params.id;

//     // Check if the category exists
//     const category = await Category.findById(categoryId);
//     if (!category) {
//       return res.status(404).json({ message: "Category not found" });
//     }

//     // Fetch related products
//     const products = await Product.find({ category: categoryId });

//     res.status(200).json({ category, products });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // Update a category by ID
// export const updateCategory = async (req, res) => {
//     try {
//         const { name, description } = req.body;
//         const category = await Category.findByIdAndUpdate(
//             req.params.id,
//             { name, description },
//             { new: true, runValidators: true }
//         );

//         if (!category) {
//             return res.status(404).json({ message: "Category not found" });
//         }

//         res.status(200).json(category);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Delete a category by ID
// export const deleteCategory = async (req, res) => {
//     try {
//         const category = await Category.findByIdAndDelete(req.params.id);

//         if (!category) {
//             return res.status(404).json({ message: "Category not found" });
//         }

//         res.status(200).json({ message: "Category deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };







// import Category from "../model/category.model.js";
// import Product from "../model/product.model.js";

// const getImageUrl = (image) => {
//   return image ? `http://localhost:4000/uploads/${image}` : null;
// };

// // Create a new category
// export const createCategory = async (req, res) => {
//   try {
//     const { name, description } = req.body;

//     const existingCategory = await Category.findOne({ name });
//     if (existingCategory) {
//       return res.status(400).json({ message: "Category already exists" });
//     }

//     const category = await Category.create({ name, description });
//     res.status(201).json(category);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get all categories
// export const getCategories = async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.status(200).json(categories);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get a single category by ID and include its products
// export const getCategory = async (req, res) => {
//   try {
//     const categoryId = req.params.id;
//     const category = await Category.findById(categoryId);
//     if (!category) {
//       return res.status(404).json({ message: "Category not found" });
//     }

//     const products = await Product.find({ category: categoryId });

//     const updatedProducts = products.map((product) => ({
//       ...product.toObject(),
//       imageUrl: getImageUrl(product.image),
//     }));

//     res.status(200).json({ category, products: updatedProducts });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update a category
// export const updateCategory = async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     const category = await Category.findByIdAndUpdate(
//       req.params.id,
//       { name, description },
//       { new: true, runValidators: true }
//     );

//     if (!category) {
//       return res.status(404).json({ message: "Category not found" });
//     }

//     res.status(200).json(category);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Delete a category
// export const deleteCategory = async (req, res) => {
//   try {
//     const category = await Category.findByIdAndDelete(req.params.id);
//     if (!category) {
//       return res.status(404).json({ message: "Category not found" });
//     }

//     res.status(200).json({ message: "Category deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// import Category from "../model/category.model.js";
// import Product from "../model/product.model.js";
// import path from "path";
// import multer from "multer";

// // --- multer config directly here ---
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// export const upload = multer({ storage });

// // --- helper to form image URL ---
// const getImageUrl = (filename) =>
//   filename ? `http://localhost:4000/uploads/${filename}` : null;

// // --- create ---
// export const createCategory = async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     const image = req.file ? req.file.filename : null;

//     const existingCategory = await Category.findOne({ name });
//     if (existingCategory) {
//       return res.status(400).json({ message: "Category already exists" });
//     }

//     const category = await Category.create({ name, description, image });
//     res.status(201).json({ ...category.toObject(), imageUrl: getImageUrl(image) });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // --- get all ---
// export const getCategories = async (req, res) => {
//   try {
//     const categories = await Category.find();
//     const updated = categories.map((cat) => ({
//       ...cat.toObject(),
//       imageUrl: getImageUrl(cat.image),
//     }));
//     res.status(200).json(updated);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // --- get one + products ---
// export const getCategory = async (req, res) => {
//   try {
//     const category = await Category.findById(req.params.id);
//     if (!category) return res.status(404).json({ message: "Not found" });

//     const products = await Product.find({ category: req.params.id });
//     const updatedProducts = products.map((p) => ({
//       ...p.toObject(),
//       imageUrl: getImageUrl(p.image),
//     }));

//     res.status(200).json({
//       ...category.toObject(),
//       imageUrl: getImageUrl(category.image),
//       products: updatedProducts,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // --- update ---
// export const updateCategory = async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     const image = req.file ? req.file.filename : null;

//     const updateData = { name, description };
//     if (image) updateData.image = image;

//     const category = await Category.findByIdAndUpdate(req.params.id, updateData, {
//       new: true,
//       runValidators: true,
//     });

//     if (!category) return res.status(404).json({ message: "Not found" });

//     res.status(200).json({
//       ...category.toObject(),
//       imageUrl: getImageUrl(category.image),
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // --- delete ---
// export const deleteCategory = async (req, res) => {
//   try {
//     const category = await Category.findByIdAndDelete(req.params.id);
//     if (!category) return res.status(404).json({ message: "Not found" });
//     res.status(200).json({ message: "Category deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// import Category from "../model/category.model.js";
// import Product from "../model/product.model.js";
// import multer from "multer";
// import path from "path";
// import fs from "fs";

// // Multer setup (inside category controller file)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
// });
// export const upload = multer({ storage });

// // Helper to get full image URL
// const getImageUrl = (filename) => filename ? `http://localhost:4000/uploads/${filename}` : null;

// // Helper to delete old image file if exists
// const deleteImageFile = (filename) => {
//   if (!filename) return;
//   const filePath = path.join("uploads", filename);
//   if (fs.existsSync(filePath)) {
//     fs.unlinkSync(filePath);
//   }
// };

// // Create category controller
// export const createCategory = async (req, res) => {
//   try {
//     const { name, description } = req.body;
//     const image = req.file ? req.file.filename : null;

//     const existingCategory = await Category.findOne({ name });
//     if (existingCategory) {
//       return res.status(400).json({ message: "Category already exists" });
//     }

//     const category = await Category.create({ name, description, image });
//     res.status(201).json({ ...category.toObject(), imageUrl: getImageUrl(image) });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get all categories
// export const getCategories = async (req, res) => {
//   try {
//     const categories = await Category.find();
//     const updated = categories.map(cat => ({
//       ...cat.toObject(),
//       imageUrl: getImageUrl(cat.image),
//     }));
//     res.status(200).json(updated);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get single category + products
// export const getCategory = async (req, res) => {
//   try {
//     const category = await Category.findById(req.params.id);
//     if (!category) return res.status(404).json({ message: "Not found" });

//     const products = await Product.find({ category: req.params.id });
//     const updatedProducts = products.map(p => ({
//       ...p.toObject(),
//       imageUrl: getImageUrl(p.image),
//     }));

//     res.status(200).json({
//       ...category.toObject(),
//       imageUrl: getImageUrl(category.image),
//       products: updatedProducts,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update category (can update image too)
// export const updateCategory = async (req, res) => {
//   try {
//     console.log("Uploaded file:", req.file);
//     const { name, description } = req.body;
//     const newImage = req.file ? req.file.filename : null;

//     const category = await Category.findById(req.params.id);
//     if (!category) return res.status(404).json({ message: "Not found" });

//     // Delete old image if new one uploaded
//     if (newImage && category.image) {
//       deleteImageFile(category.image);
//     }

//     category.name = name || category.name;
//     category.description = description || category.description;
//     if (newImage) category.image = newImage;

//     await category.save();

//     res.status(200).json({
//       ...category.toObject(),
//       imageUrl: getImageUrl(category.image),
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Delete category + products + image
// export const deleteCategory = async (req, res) => {
//   try {
//     const category = await Category.findById(req.params.id);
//     if (!category) return res.status(404).json({ message: "Not found" });

//     // Delete image file
//     if (category.image) {
//       deleteImageFile(category.image);
//     }

//     // Delete related products
//     await Product.deleteMany({ category: req.params.id });

//     // Delete category
//     await category.deleteOne();

//     res.status(200).json({ message: "Category and its products deleted" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



import Category from "../model/category.model.js";
import Product from "../model/product.model.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// Multer storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("./uploads")) {
      fs.mkdirSync("./uploads");
    }
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);
    const filename = name + "~" + Date.now() + ext;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });

// Helper: Get full URL for image
const getImageUrl = (filename) =>
  filename ? `http://localhost:4000/uploads/${filename}` : null;

// Helper: Delete old image file from disk
const deleteImageFile = (filename) => {
  if (!filename) return;
  const filePath = path.join("uploads", filename);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

// Create Category with image upload inside controller
export const createCategory = async (req, res) => {
  try {
    // Use multer to process single file "image"
    const uploadSingle = upload.single("image");

    uploadSingle(req, res, async function (err) {
      if (err) {
        return res.status(400).json({ message: err.message, success: false });
      }

      const { name, description } = req.body;
      const image = req.file ? req.file.filename : null;

      // Check if category already exists
      const existingCategory = await Category.findOne({ name });
      if (existingCategory) {
        // Delete uploaded image since category exists to avoid orphan file
        if (image) deleteImageFile(image);
        return res.status(400).json({
          message: "Category already exists",
          success: false,
        });
      }

      const category = await Category.create({ name, description, image });

      res.status(201).json({
        ...category.toObject(),
        imageUrl: getImageUrl(image),
        success: true,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// Get all categories with full image URL
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    const updated = categories.map((cat) => ({
      ...cat.toObject(),
      imageUrl: getImageUrl(cat.image),
    }));

    res.status(200).json({ data: updated, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// Get single category + its products with image URLs
export const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Category not found", success: false });

    const products = await Product.find({ category: req.params.id });
    const updatedProducts = products.map((p) => ({
      ...p.toObject(),
      imageUrl: getImageUrl(p.image),
    }));

    res.status(200).json({
      ...category.toObject(),
      imageUrl: getImageUrl(category.image),
      products: updatedProducts,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// Update category with optional image upload inside controller
export const updateCategory = async (req, res) => {
  try {
    console.log("Uploaded file:", req.file);
    
    const uploadSingle = upload.single("image");

    uploadSingle(req, res, async function (err) {
      if (err) return res.status(400).json({ message: err.message, success: false });

      const { name, description } = req.body;
      const newImage = req.file ? req.file.filename : null;

      const category = await Category.findById(req.params.id);
      if (!category)
        return res.status(404).json({ message: "Category not found", success: false });

      // Delete old image if new image uploaded
      if (newImage && category.image) {
        deleteImageFile(category.image);
      }

      category.name = name || category.name;
      category.description = description || category.description;
      if (newImage) category.image = newImage;

      await category.save();

      res.status(200).json({
        ...category.toObject(),
        imageUrl: getImageUrl(category.image),
        success: true,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// Delete category, its image, and all related products
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Category not found", success: false });

    // Delete category image file
    if (category.image) {
      deleteImageFile(category.image);
    }

    // Delete all products in this category
    await Product.deleteMany({ category: req.params.id });

    // Delete category
    await category.deleteOne();

    res.status(200).json({ message: "Category and related products deleted", success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};
