//post route
const router = require("express").Router();

const { Post, Comment, User } = require("../../models")

//route get all posts 

router.get("/", (req, res) => {
    Post.findall({
        include: [
            {
                model: Comment,
                attributes: ["id, comment_text, user_id, post_id"],
                include:{
                model: User,
                attributes: ["username"],
            },
        },
        {
            model: User,
            attributes: ["username"],
        },
        ],
    }).then((dbpostData) => res.json(dbpostData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});