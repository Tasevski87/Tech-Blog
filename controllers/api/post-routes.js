//post route
const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Post, Comment, User } = require("../../models")
// const sequelize = require("../../config/connection")

//route get all posts 
router.get("/", (req, res) => {
    Post.findAll({
        include: [Comment, User]
    }).then((dbpostData) => res.json(dbpostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET api/post/1
router.get("/:id", (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id,
        },
        include: [Comment],
    })
        .then((dbpostData) => {
            if (!dbpostData) {
                res.status(404).json({ message: "No project found with this id" });
                return;
            }
            res.json(dbpostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST api/post
router.post("/",withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
    })
        .then((dbpostData) => res.json(dbpostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT api/post/1
router.put("/:id",withAuth, (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((dbpostData) => {
            if (!dbpostData[0]) {
                res.status(404).json({ message: "No project found with this id" });
                return;
            }
            res.json(dbpostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE api/post/1
router.delete("/:id",withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((dbpostData) => {
            if (!dbpostData) {
                res.status(404).json({ message: "No project found with this id" });
                return;
            }
            res.json(dbpostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;