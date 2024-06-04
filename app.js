const express = require('express');
const app = express();
const sequelize = require('./database/db');/**importamos el objeto sequelize */
const User = require('./database/models/User');/**añadimos el modelo */

// Setting
const PORT = process.env.PORT || 3000;

// Rutas
app.get('/', function (req, res) {

    User.create({
        name: "Noelia",
        birthday: new Date(1985, 6, 1)
    }).then(user => {/**devuelve el usuario que hemos creado */
        res.json(user);
    });

    // User.findAll().then(users => {/**devuelve una promesa */
    //     res.json(users);/**muestra por pantalla */
    // });

});

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arranado en http://localhost:${PORT}`);

    // Conectase a la base de datos
    // Force true: DROP TABLES
    sequelize.sync({ force: true }).then(() => {
        console.log("Nos hemos conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })

});