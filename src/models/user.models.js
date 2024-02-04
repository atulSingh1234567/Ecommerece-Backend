import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    gender: {
        type: String,
        required: true
    },
    alternatePhone: {
        type: String
    },
    signupPhoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }
})

export const User = mongoose.model('User' , userSchema);