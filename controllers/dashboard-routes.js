const router = require("express").Router();
const sequelize = require('../config/connection')
const withAuth = require("../utils/auth");
const { Post, User, Comment } = require("../models");

// get user data for dashboard-posts
router.get("/", withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
        order: [["id", "DESC"]],
        attributes: [
            "id",
            "content",
            "title",
            "created_at"
        ],

        include: [
            {
                model: Comment,
                attributes: [
                    "id",
                    "comment_text",
                    'post_id',
                    "user_id",
                    "created_at",
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            },
        ],
    })
        .then((dbpostData) => {
            const posts = dbpostData.map(post => post.get({ plain: true }));
            // render dashboard view, send post data and loggedIn
            res.render("dashboard", { posts, loggedIn: true });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get user data for dashboard-comments
router.get("/edit/:id", withAuth, (req, res) => {
    Post.findByPk(req.params.id, {
        attributes: [
            'id',
            'content',
            'title',
            'created_at',
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'created_at'],
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
    }).then(dbpostData => {
        if (dbpostData) {
            const post = dbpostData.get({ plain: true });

            res.render('edit-post', {
                post,
                loggedIn: true
            });
        } else {
            res.status(404).end();
        }
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;