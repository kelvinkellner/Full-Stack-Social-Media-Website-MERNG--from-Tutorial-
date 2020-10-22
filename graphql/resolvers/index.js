const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentResolvers = require('./comments');

module.exports = {
    // Modifier, is run anytime a Post is returned and adds those two values on server side
    Post: {
        likeCount: (parent) => parent.likes.length,
        commentCount: (parent) => parent.comments.length
    },
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentResolvers.Mutation
    },
    Subscription: {
        ...postsResolvers.Subscription
    }
}