import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Banner", bannerSchema);
