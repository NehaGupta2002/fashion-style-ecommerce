import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        stock: {
            type: Number,
            default: 0
        },
        image: { 
            type: String
        },
    },
    { timestamps: true }
);

export default mongoose.model("Product", productSchema);

