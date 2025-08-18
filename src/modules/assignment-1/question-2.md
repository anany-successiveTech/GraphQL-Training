# GraphQL: Solving Over-Fetching & Under-Fetching

## 📌 Introduction
When building APIs, two common performance issues are:
- **Over-Fetching:** Retrieving more data than necessary.
- **Under-Fetching:** Not retrieving enough data in one request, forcing multiple calls.

These problems are common in REST APIs because **endpoints return fixed data structures**, not necessarily what the client actually needs.

**GraphQL** was designed to address these challenges by allowing clients to **request exactly the fields they need** in a single, flexible query.

---

##  Problems with REST

### Over-Fetching Example
**Goal:** Get only a user's name.  
**REST Request:** `GET /users/1`  
**Response:** Returns the full user object — including `email`, `posts`, and other fields that the client does not need.  
**Drawback:** Increases payload size and wastes bandwidth.

### Under-Fetching Example
**Goal:** Get a user's name and likes on their posts.  
**REST Flow:**
1. `GET /users/1` → returns user details.
2. `GET /users/1/posts` → returns posts with likes.  
**Drawback:** Requires multiple network requests, adding latency.

---

## ✅ How GraphQL Fixes This

### A Single, Precise Query
```graphql
{
  user(id: 1) {
    name
    posts {
      likes
    }
  }
}
