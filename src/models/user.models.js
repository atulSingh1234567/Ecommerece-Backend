import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: [true, 'email already taken'],
        trim: true,
        required: [true, "Cant be left unfilled"]
    },
    gender: {
        type: String,
        required: true
    },
    alternatePhone: {
        type: String,
    },
    signupPhoneNumber: {
        type: String,
        unique: [true , "Phone number already exists"],
        required: true
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }
})

export const User = mongoose.model("User" , userSchema);