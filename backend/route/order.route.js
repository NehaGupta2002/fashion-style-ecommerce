// import express from "express";
// import { createOrder, getUserOrders,  getAllOrders } from "../controller/order.controller.js";
// import authMiddleware from "../middleware/auth.middleware.js";

// const router = express.Router();

// // Create order
// router.post("/create", authMiddleware, createOrder);

// // Get orders for logged-in user
// router.get("/", authMiddleware, getUserOrders);
// router.get("/admin", auth, isAdmin, getAllOrders);

// export default router;
// import express from "express";
// import {  getUserOrders, getAllOrders } from "../controller/order.controller.js";
// import authMiddleware from "../middleware/auth.middleware.js";

// const router = express.Router();

// // router.post("/", authMiddleware, createOrder);
// router.get("/", authMiddleware, getUserOrders);
// router.get("/admin", authMiddleware, getAllOrders);

// export default router;

import express from "express";

import { getAllOrders,placeOrder, getSingleOrderByUser } from "../controller/order.controller";
import { auth, isAdmin } from "../middleware/auth.middleware";

const router = express.Router();

// POST /api/orders/place
router.post("/place", placeOrder);

// GET /api/orders/user/:userId
router.get("/user/:userId", getSingleOrderByUser);

router.get("/allorders", auth, isAdmin, getAllOrders);

export default  router;


