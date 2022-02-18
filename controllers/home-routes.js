const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// get a single project for view
router.get("/project/:id", (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ["id", "title", "content", "user_id"],
        include: [
            {
                model: Comment,
                attributes: [
                    "id",
                    "comment_text",
                    "post_id",
                    "user_id",
                    "created_at",
                ],
                include: {
                    model: User,
                    attributes: { exclude: ["password"] },
                },
            },
            {
                model: User,
                attributes: { exclude: ["password"] },
            },
        ],
    })
        .then((dbpostData) => {
            if (!dbpostData) {
                res.status(404).json({ message: "No project found with this id" });
                return;
            }

            const post = dbpostData.get({ plain: true });
            // render single project page, send project data and loggedIn
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

// get projects for homepage
router.get("/", (req, res) => {
    Post.findAll({
        order: [["id", "DESC"]],
        attributes: ["id", "title", "content", "created_at","user_id"],
        include: [
            {
                model: Comment,
            },
            {
                model: User,
                attributes: { exclude: ["password"] },
            },
        ],
    })
        .then((dbpostData) => {
            const post = dbpostData.map((post) =>
                post.get({ plain: true })
            );
            res.render("homepage", {
                post,
                loggedIn: req.session.loggedIn,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});



// generate login page
router.get("/login", (req, res) => {
    res.render("login");
});


// generate signup page
router.get("/signup", (req, res) => {
    res.render("signup");
});

module.exports = router;