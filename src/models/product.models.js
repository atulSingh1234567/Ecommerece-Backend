import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true 
    },
    stock: {
        type: Number,
        required: true 
    },
    thumbnail: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    discountPercentage: {
        type: Number
    }
});

export const Product = mongoose.model('Product',productSchema);

