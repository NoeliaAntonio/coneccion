Se tiene que crear la base de datos solamente el nombre de la bd en el xamp y desde visual code se crean las tablas,modelos y los datos de los usuarios
es una conecciona a la base de datos sencilla con node,express y sequelize



para inicializar nuestro proyecto escribir en la terminal:
npm init -y   //me crea una archivo llamado package.json
npm i express  //me creo node_modules y packag-lock.json
npm i nodemon


en package.json en la linea 6 donde dice
  "test": "echo \"Error: no test specified\" && exit 1"
  cambiar por:
  "dev":"nodemon app.js"


  y en la linea 4 donde dice:
   "main": "index.js",
   cambiar por:
    "main": "app.js",


    para arrancar el servidor ponemos en la terminal:
    npm run dev


    instalamos en la terminal:
    npm i sequelize mysql2




