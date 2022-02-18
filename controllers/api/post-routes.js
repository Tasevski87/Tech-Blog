//post route
const router = require("express").Router();

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
router.post("/", (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.user_id,
    })
        .then((dbpostData) => res.json(dbpostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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