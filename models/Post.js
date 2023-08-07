const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


class Post extends Model { }


Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_data: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'user',
                key: 'id'
            }
        },

        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'

    }
)
module.exports = Post;