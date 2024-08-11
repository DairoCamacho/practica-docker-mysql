import express from 'express';
import mysql from 'mysql2/promise';

const app = express();

app.get('/', async (req, res) => {
  res.send('Hello World');
});

const port = 3000;
app.listen(port);
console.log('Server on port ', port);

/**
 * creamos un proyecto de node:
 ** node init -y
 * 
 * Agregamos las dependencias:
 ** npm install express
 ** npm install mysql2
 ** npm install mongoose
 * 
 * añadir la propiedad "type": "module", en el package.json
 * 
 ** node --watch server-mysql.js
 *
 * ************************************************************
 * Agregamos el archivo Dockerfile y .dockerignore
 * 
 * Para trabajar con docker no necesita estas dependencias:
 ** npm remove mysql2 mongoose
 * 
 * Creamos una imagen con nuestro proyecto (el punto es la ubicación de Dockerfile):
 ** docker build . -t node-demo
 * 
 * CREAMOS y EJECUTAMOS EL CONTENEDOR:
 ** docker run --name server1 -p 3001:3000 node-demo
 * docker run --name server2 -p 3002:3000 node-demo
 * docker exec -it server1 bash
 */