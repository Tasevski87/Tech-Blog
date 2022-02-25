const Post = require("./post");
const User = require("./User");
const Comment = require("./Comment");

// create relationships
Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL",
})

Post.hasMany(Comment,{
    foreignKey: "post_id",
    onDelete: "SET NULL",
})

User.hasMany(Post,{
    foreignKey: "user_id",
    onDelete: "SET NULL",
})
User.hasMany(Comment,{
    foreignKey: "user_id",
    onDelete: "SET NULL",
})

Comment.belongsTo(Post,{
    foreignKey: "post_id",
    onDelete: "SET NULL",
})
Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL",
})

module.exports = { Post, Comment, User};