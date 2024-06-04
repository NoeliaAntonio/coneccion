const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');/**importamos nuestro objeto sequelize */

class User extends Model {}
User.init({/**es un constructor o inicializador pide dos parametros */
    name: DataTypes.STRING,
    birthday: DataTypes.DATE
}, {
    sequelize,
    modelName: "user"
});

module.exports = User;