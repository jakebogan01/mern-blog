import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
        username: {
                type: String,
                required: true,
                unique: true,
                max: 255
        },
        email: {
                type: String,
                required: true,
                unique: true,
                min: 6,
                max: 255
        },
        password: {
                type: String,
                required: true,
                min: 6,
                max: 225
        }
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

export default User