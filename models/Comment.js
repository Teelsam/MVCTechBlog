const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            referneces: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        comment_data: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
)
module.exports = Comment;