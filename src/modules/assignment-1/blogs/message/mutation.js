// Implimented assignmnet-1 and assignment-2's question to maintain the existing structure.

import { pubsub } from "../../../../server/pubSub.js";
import { users, posts, comments } from "./dataSource.js";

export const blogMessageResolver = {
  registerUser: (_, { name, email }) => {
    // const { name, email } = args;
    if (!name || !email) {
      return {
        message: "Name or Email is missing",
        status: 400,
      };
    }
    const newUser = {
      id: String(users.length + 1),
      name,
      email,
      isOnline: false,
      createdAt: new Date().toISOString,
    };

    users.push(newUser);
    return newUser;
  },
  loginUser: (_, { email, password }) => {
    if (!email || !password) {
      return {
        message: "Incorrect email or password",
        code: 401,
      }; // matches Error type
    }

    const user = users.find((u) => u.email === email);

    if (!user) {
      return {
        message: "User does not exist, create account",
        code: 404,
      };
    }

    return user; // matched User type
    // In GraphQL schema matters a lot
    // It has to be return the way it was defined in the schema.gql file
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
    pubsub.publish("COMMENT_POSTED", { commentPosted: newComment }); // assignment-3, question-2
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

  // assignment-3 part

  setUserPresence: (_, { userId, isOnline }) => {
    const user = users.find((u) => u.id === userId);

    if (!user) {
      return {
        message: "User not found",
        code: 404,
      };
    }

    // Add or update the user's presence
    user.isOnline = isOnline;

    // Publish subscription events
    if (isOnline) {
      pubsub.publish("USER_JOINED", { userJoined: user });
    } else {
      pubsub.publish("USER_LEFT", { userLeft: user });
    }

    return {
      userId,
      isOnline,
    };
  },
};
