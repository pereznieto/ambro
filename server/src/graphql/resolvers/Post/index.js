import Post from "../../../models/Post";

export default {
  Query: {
    post: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Post
          .findById(id)
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    },
    posts: () => {
      return new Promise((resolve, reject) => {
        Post
          .find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addPost: (root, { instagramId, image, ratio, location, caption, tags, date, text }) => {
      const newPost = new Post({ instagramId, image, ratio, location, caption, tags, date, text });
      return new Promise((resolve, reject) => {
        newPost.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editPost: (root, { id, instagramId, image, ratio, location, caption, tags, date, text }) => {
      return new Promise((resolve, reject) => {
        Post
          .findByIdAndUpdate(id, { $set: { instagramId, image, ratio, location, caption, tags, date, text } })
          .exec(
            (err, res) => {
              err ? reject(err) : resolve(res);
            }
          );
      });
    },
    deletePost: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Post.findByIdAndDelete(id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
