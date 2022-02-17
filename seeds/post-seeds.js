const { Post } = require("../models")

Post.init(
    {
        title: "test",
        user_id: 1,
    }
)

const seedPost = () => Post.bulkcreate(postData);
module.exports = seedPost;