export const users = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
  { id: "3", name: "Charlie", email: "charlie@example.com" },
];

export const posts = [
  { id: "1", title: "GraphQL Basics", content: "Hello GraphQL!", authorId: "1" },
  { id: "2", title: "Apollo Server", content: "Easy GraphQL setup", authorId: "2" },
  { id: "3", title: "Advanced GraphQL", content: "Deep dive into resolvers", authorId: "3" },
];

export const comments = [
  { id: "1", text: "Great post!", authorId: "2", postId: "1" },
  { id: "2", text: "Thanks for sharing!", authorId: "1", postId: "2" },
  { id: "3", text: "Very informative.", authorId: "3", postId: "1" },
  { id: "4", text: "Can't wait for more!", authorId: "1", postId: "3" },
];
