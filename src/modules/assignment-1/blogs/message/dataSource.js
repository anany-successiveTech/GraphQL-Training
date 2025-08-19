export const users = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
  { id: "3", name: "Charlie", email: "charlie@example.com" },
];

export const posts = [
  {
    id: "1",
    title: "GraphQL Basics",
    content: "Hello GraphQL!",
    authorId: "1",
    createdAt: "2025-08-19T10:00:00Z",
  },
  {
    id: "2",
    title: "Apollo Server",
    content: "Easy GraphQL setup",
    authorId: "2",
    createdAt: "2025-08-18T14:30:00Z",
  },
  {
    id: "3",
    title: "Advanced GraphQL",
    content: "Deep dive into resolvers",
    authorId: "3",
    createdAt: "2025-08-17T08:45:00Z",
  },
];

export const comments = [
  { id: "1", text: "Great post!", authorId: "2", postId: "1", createdAt: "2025-08-19T11:00:00Z" },
  { id: "2", text: "Thanks for sharing!", authorId: "1", postId: "2", createdAt: "2025-08-18T15:00:00Z" },
  { id: "3", text: "Very informative.", authorId: "3", postId: "1", createdAt: "2025-08-19T12:30:00Z" },
  { id: "4", text: "Can't wait for more!", authorId: "1", postId: "3", createdAt: "2025-08-17T09:00:00Z" },
];
