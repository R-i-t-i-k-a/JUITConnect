import mongoose from "mongoose";

// Define the schemas
const answerSchema = mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const postSchema = mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  upvotes: {
    type: [mongoose.Schema.Types.ObjectId], // Referencing User IDs
    ref: 'User',
    default: []
  },
  answers: {
    type: [mongoose.Schema.Types.ObjectId], // Referencing Answer IDs
    ref: 'Answer',
    default: []
  },
  username: {
    type: String,
    required: true
  }
});

// Create the models
const Answer = mongoose.model('Answer', answerSchema);
const Post = mongoose.model('Post', postSchema);

// Export the models
export { Post, Answer };
