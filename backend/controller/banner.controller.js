import Banner from "../model/banner.model";
import multer from "multer";
import fs from "fs-extra";
import path from "path";

// Multer configuration for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = "uploads/banners/";
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

const upload = multer({ storage }).single("image");

// Create a new banner
export const createBanner = (req, res) => {
    upload(req, res, async (err) => {
        if (err) return res.status(400).json({ message: err.message });

        try {
            const { title, description } = req.body;
            const image = req.file ? req.file.filename : "";

            const banner = new Banner({ title, description, image });
            await banner.save();

            res.status(201).json({
                message: "Banner uploaded successfully",
                banner: {
                    ...banner._doc,
                    imageUrl: `http://localhost:4000/uploads/banners/${image}`,
                },
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
};

// Get all banners
export const getBanners = async (req, res) => {
    try {
        const banners = await Banner.find();
        const bannersWithImageUrl = banners.map((banner) => ({
            ...banner._doc,
            imageUrl: `http://localhost:4000/uploads/banners/${banner.image}`,
        }));

        res.status(200).json({ count: banners.length, banners: bannersWithImageUrl });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a banner
export const deleteBanner = async (req, res) => {
    try {
        const banner = await Banner.findById(req.params.id);
        if (!banner) return res.status(404).json({ message: "Banner not found" });

        if (banner.image) {
            const imagePath = path.join("uploads/banners", banner.image);
            if (await fs.pathExists(imagePath)) {
                await fs.remove(imagePath);
            }
        }

        await Banner.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Banner deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
