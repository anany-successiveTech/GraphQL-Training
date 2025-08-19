import { comments, posts, users } from "./dataSource.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const blogQueryResolver = {
  users: async () => {
    console.log(`Fetching user details within 2ms`);
    await delay(2000);
    return users;
  },
  posts: async () => {
    console.log(`Fetching posts details within 2ms`);
    await delay(2000);
    return posts;
  },
  comments: async () => {
    console.log(`Fetching comments details within 2ms`);
    await delay(2000);
    return comments;
  },

  // assignement-2 parts start here question-6, question-7

  paginatedPosts: async (_, args) => {
    const { limit, page, sortBy = "createdAt", sortOrder = "desc" } = args;
    await delay(2000);

    const sortedPosts = [...posts].sort((a, b) => {
      if ((sortOrder === "asc")) {
        return new Date(a[sortBy] - new Date(b[sortBy]));
      } else {
        return new Date(b[sortBy]) - new Date(a[sortBy]);
      }
    });
    const start = (page - 1) * limit;

    const end = start + limit;
    return {
      posts: posts.slice(start, end),
      totalCount: posts.length,
    };
  },
};
