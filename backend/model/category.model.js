import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String
        },
        image: String,
    },
    { timestamps: true }
);

export default mongoose.model("Category", categorySchema);




