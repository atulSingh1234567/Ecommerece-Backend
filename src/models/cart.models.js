import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
     userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
     },
     productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
     }
});

export const Cart = mongoose.model('Cart' , cartSchema);