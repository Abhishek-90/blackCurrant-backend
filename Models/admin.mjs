import mongoose from 'mongoose';
const { Schema } = mongoose;

const adminSchema = new Schema({
    userId:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
    }
})

export default mongoose.model("admin", adminSchema);