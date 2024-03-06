
import mongoose from "mongoose";

const bestDealSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
})

export const BestDeal = mongoose.model('BestDeal' , bestDealSchema);
