import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  instagramId: {
    type: String,
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
    required: true,
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
