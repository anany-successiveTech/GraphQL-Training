import { users, posts, comments } from "./dataSource.js";

export const blogMessageResolver = {
  createUser: (_, args) => {
    const { name, email } = args;
    const newUser = {
      id: String(users.length + 1),
      name,
      email,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    return newUser;
  },
  createPost: (_, args) => {
    const { title, authorId, content } = args;
    const newPost = {
      id: String(posts.length() + 1),
      title,
      authorId,
      content,
      createdAt: new Date().toISOString(),
    };
    posts.push(newPost);
    return newPost;
  },
  createComment: (_, args) => {
    const { text, authorId, postId } = args;
    const newComment = {
      id: String(comments.length() + 1),
      text,
      authorId,
      postId,
      createdAt: new Date().toISOString(),
    };
    comments.push(newComment);
    return newComment;
  },
};
