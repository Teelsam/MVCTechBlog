const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');

const userData = require('./userData.json');

class User extends Model {
    checkPassword(pass) {
        return bcrypt.compareSync(pass, this.password)
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
)