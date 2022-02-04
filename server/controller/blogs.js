import BlogContent from "../models/blogContent.js";

export const getAllBlogs = async (req,res) => {
  try{
    const blogs = await BlogContent.find();
    console.log(blogs);
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({message: "PAGE NOT FOUND"})
  }
}

export const createBlog = async (req,res) => {
  const body = req.body;
  const newBlog = new BlogContent(body);
  try{
    await newBlog.save();
    res.status(201).json(newBlog);
  }catch{
    res.status(409).json({message: "Error while persisting blog!"})
  }
}
