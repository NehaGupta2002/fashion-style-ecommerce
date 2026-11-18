import dotenv from "dotenv";
dotenv.config();


import express from "express";
import mongoose from "mongoose";
import categoryRoutes from "./route/category.route";
import productRoutes from "./route/product.route";
import userRoutes from "./route/user.route";
import bannerRoutes from "./route/banner.route";
import orderRoutes from "./route/order.route"
import path from "path";



const app = express();
const cors = require("cors");
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("server is running...")
})

mongoose
.connect('mongodb://localhost:/Darko')

.then(()=>{
    console.log("Connected");    
})

.catch((err)=>{
    console.log("error");

})

app.listen(port,()=>{
    console.log("server is running on http://localhost"+port);
    
})

// Serve static files from the uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/uploads", express.static("uploads")); // Serve static images
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/banners", bannerRoutes);
app.use("/uploads/banner", express.static("uploads/banners")); // Serve static images
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

