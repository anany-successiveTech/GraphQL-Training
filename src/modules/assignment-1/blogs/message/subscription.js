import { pubsub } from "../../../../server/pubSub.js";

export const blogSubscriptionResolvers = {
  commentPosted: {
    subscribe: () => pubsub.asyncIterator(["COMMENT_POSTED"]),
  },

  userJoined: {
    subscribe: () => pubsub.asyncIterator(["USER_JOINED"]),
  },

  userLeft: {
    subscribe: () => pubsub.asyncIterator(["USER_LEFT"]),
  },
};
