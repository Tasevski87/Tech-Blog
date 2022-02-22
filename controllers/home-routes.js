const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const sequielize = require('../config/connection')

// get a single post for view
router.get("/post/:id", (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id,
        },
        attributes: [
            "id",
            "title",
            "content"],
        include: [
            {
                model: Comment,
                attributes: [
                    "id",
                    "comment_text",
                    "user_id",
                    "created_at",
                ],
                include: {
                    model: User,
                    attributes: ['username']
                },
            },
            {
                model: User,
                attributes: ['username']
            },
        ],
    })
        .then((dbpostData) => {
            if (!dbpostData) {
                res.status(404).json({ message: "No post found with this id" });
                return;
            }

            const post = dbpostData.get({ plain: true });
            // render single post page, send post data and loggedIn
            res.render("single-post", {
                post,
                loggedIn: req.session.loggedIn,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get post for homepage
router.get("/", (req, res) => {
    Post.findAll({
        order: [["id", "DESC"]],
        attributes: [
            "id",
            "title",
            "content",
            "created_at"],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: { exclude: ["password"] },
            },
        ],
    })
        .then((dbpostData) => {
            const post = dbpostData.map(post =>
                post.get({ plain: true })
            );
            res.render("homepage", {

                post,
                loggedIn: req.session.loggedIn,

            });
            console.log("===============================")
            console.log(Post)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});



// generate login page
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render("login");
});


// generate signup page
// router.get("/signup", (req, res) => {
//     res.render("signup");
// });

module.exports = router;