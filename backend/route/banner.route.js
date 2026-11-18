import express from "express";
import { createBanner, getBanners, deleteBanner } from "../controller/banner.controller";

const router = express.Router();

router.post("/", createBanner); // Upload a new banner
router.get("/", getBanners); // Get all banners
router.delete("/:id", deleteBanner); // Delete a banner

export default router;
