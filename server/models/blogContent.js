import mongoose from 'mongoose'
const blogSchema = mongoose.Schema({
  title: String,
  message: String,
  blogger: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const BlogContent = mongoose.model('BlogContent', blogSchema);
export default BlogContent;