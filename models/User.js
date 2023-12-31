const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');



class User extends Model {
    checkPassword(pass) {
        return bcrypt.compareSync(pass, this.password)
    }
}

User.init(//creates user table
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        hooks: {
            beforeCreate: async (createNewUser) => {//encrypts the users password
                createNewUser.password = await bcrypt.hash(createNewUser.password, 10);
                return createNewUser;
            },

            beforeUpdate: async (updatedUser) => {//encrypts the users password
                updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
                return updatedUser;
            }
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'

    }
)
module.exports = User;