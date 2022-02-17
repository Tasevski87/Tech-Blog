const { Post } = require("../models")

Post.init(
    {
        title: "test",
        user_id: 1,
    }
)

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;