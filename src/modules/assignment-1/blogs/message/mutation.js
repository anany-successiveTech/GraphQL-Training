// Implimented assignmnet-1 and assignment-2's question to maintain the existing structure.

import { users, posts, comments } from "./dataSource.js";

export const blogMessageResolver = {
  createUser: (_, args) => {
    const { name, email } = args;
    const newUser = {
      id: String(users.length + 1),
      name,
      email,
      createdAt: new Date().toISOString,
    };

    users.push(newUser);
    return newUser;
  },
  createPost: (_, args) => {
    const { title, authorId, content } = args;
    const newPost = {
      id: String(posts.length + 1),
      title,
      authorId,
      content,
      createdAt: new Date().toISOString,
    };
    posts.push(newPost);
    return newPost;
  },
  createComment: (_, args) => {
    const { text, authorId, postId } = args;
    const newComment = {
      id: String(comments.length + 1),
      text,
      authorId,
      postId,
      createdAt: new Date().toISOString,
    };
    comments.push(newComment);
    return newComment;
  },

  //  assignment-2 question start start here

  updateUser: (_, args) => {
    const { id, name, email } = args;
    const isUser = users.find((user) => user.id === id);
    if (!isUser)
      return {
        message: "user not found",
        code: 404,
      };

    if (name != undefined) isUser.name = name;
    if (email != undefined) isUser.email = email;

    return isUser;
  },

  deleteComment: (_, args) => {
    const { id } = args;
    const index = comments.findIndex((comment) => comment.id === id);

    if (index == -1) {
      return {
        message: "Comment not found",
        code: 404,
      };
    }
    const [deletedComment] = comments.splice(index, 1);
    return deletedComment;
  },
};
