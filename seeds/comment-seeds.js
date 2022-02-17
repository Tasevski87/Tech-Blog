const { Comment } = require("../models");

const commentData = [
    {
        comment_text: "testing",
        user_id: 1,
        post_id: 1,

    }
];


const seedComment = () => Comment.bulk (commentData);

module.exports = seedComment;