// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// Initialize model (table) by extending off Sequelize's Model class
class Comment extends Model {}

// set up fields and rules for model
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "post",
                key: "id",
            },
        },
    },
    {
        sequelize: sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "comment",
    }
);

module.exports = Comment;
