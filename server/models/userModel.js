import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  enrollmentNumber: {
    type: String,
    required: true,
    unique: true // Ensure each enrollment number is unique
  }
});

export const User = mongoose.model('User', userSchema);

