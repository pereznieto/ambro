import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  ratio: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  date: {
    type: String,
  },
  text: {
    type: String,
  },
  tags: {
    type: [String],
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
