// import express from "express";
// import { 
//     createProduct, getProducts, getProduct, updateProduct, deleteProduct,deleteProductImage
// } from "../controller/product.controller";

// const router = express.Router();

// // ✅ Routes
// router.post("/", createProduct);  // Upload image
// router.get("/", getProducts);
// router.get("/:id", getProduct);
// router.put("/:id", updateProduct);  // Update with image
// router.delete("/:id", deleteProduct);  // Delete product & image
// router.delete("/:id/image", deleteProductImage);



// export default router;


import express from "express";
import {
    createProduct,
    updateProduct,
    deleteProduct,
    getProducts,
    getProduct,
    searchProducts

} from "../controller/product.controller";

const router = express.Router();

//  Create a new product (with image)
router.post("/", createProduct);

// Update product (including image update)
router.put("/:id", updateProduct);

//  Delete product (including image deletion)
router.delete("/:id", deleteProduct);

//  Get all products with search & filter
router.get("/", getProducts);

router.get("/search", searchProducts);


//  Get a single product by ID
router.get("/:id", getProduct);




export default router;



