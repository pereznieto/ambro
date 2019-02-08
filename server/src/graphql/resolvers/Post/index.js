import Post from "../../../models/Post";

export default {
  Query: {
    post: (root, args) => {
      return new Promise((resolve, reject) => {
        Post.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    posts: () => {
      return new Promise((resolve, reject) => {
        Post.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addPost: (root, { id, image, ratio, location, caption, tags, date, text }) => {
      const newPost = new Post({ id, image, ratio, location, caption, tags, date, text });
      return new Promise((resolve, reject) => {
        newPost.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editPost: (root, { id, image, ratio, location, caption, tags, date, text }) => {
      return new Promise((resolve, reject) => {
        Post.findOneAndUpdate({ id }, { $set: { image, ratio, location, caption, tags, date, text } }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deletePost: (root, args) => {
      return new Promise((resolve, reject) => {
        Post.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
