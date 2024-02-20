import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true,
        min: [6 , 'Pincode is a six digit postal address number']
    },
    landmark: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

export const Address = mongoose.model('Address', addressSchema)