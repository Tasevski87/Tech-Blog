//post route
const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Post, Comment, User } = require("../../models")


//route get all posts 
router.get("/", (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'content',
            'title',
            'created_at',
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'post_id',
                    'user_id',
                    'created_at',
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
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
        attributes: [
            'id',
            'content',
            'title',
            'created_at',
        ],

        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'post_id',
                    'user_id',
                    'created_at',
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbpostData => {
            if (!dbpostData) {
                res.status(404).json({ message: "No post found with this id" });
                return;
            }
            res.json(dbpostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST api/post
router.post("/", withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
    })
        .then(dbpostData => res.json(dbpostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT api/post/1
router.put("/:id", withAuth, (req, res) => {
    Post.update({
        title: req.body.title,
        content:req.body.content,
    },
        {
            where: {
                id: req.params.id,
            }
        })
        .then(dbpostData => {
            if (!dbpostData) {
                res.status(404).json({ message: "No project found with this id" });
                return;
            }
            res.json(dbpostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE api/post/1
router.delete("/:id", (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: "No post found with this id" });
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;