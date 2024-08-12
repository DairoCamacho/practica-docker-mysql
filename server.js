import express from 'express';
import mongoose from 'mongoose';
import { v4 } from 'uuid';

const app = express();
/* 
app.get('/', async (req, res) => {
  res.send('Hello World');
});
 */
const mongoConnection = await mongoose.connect('mongodb://c-mongo/test');

const productSchema = new mongoose.Schema({
  name: String
})

const ProductModel = mongoose.model('Product', productSchema);

app.get('/', async (req, res) => {

  const newProduct = await ProductModel.create({
    name: 'laptop'
  });

  res.json({
    id: v4(),
    newproduct: newProduct
  })
});

app.get('/mongo', async (req, res) => {
  const response = await mongoConnection.connection.db.databaseName;
  // res.send('Hello World');
  res.send(JSON.stringify(response));
});

const port = 3000;
app.listen(port);
console.log('Server on port ', port);

/**
 * https://youtu.be/SMqdC6g6Y2o
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
 * 
 * USO DE LA EXT. REMOTE CONTAINERS DE VSCODE
 ** Add Development Container Configuration Files
 ** Agregar configuración a la carpeta de datos de usuario
 ** Agregar configuración al area de trabajo
 ** From 'Dockerfile'
 ** Seleccionar componentes adiciones (ninguno)
 * Esto crea una carpeta llamada .devcontainer y dentro el archivo devcontainer.json
 * dentro del archivo devcontainer.json se puede configurar el contenedor
 * name = para el nombre del contenedor
 * forwardPorts = para los puertos que se exponen
 * 
 * Luego F1 y buscar Reopen in Container
 * ya dentro, al abrir una consola veremos que la ruta indica que estamos dentro del contenedor
 * 
 * instalamos uuid con el comando 
 ** npm install uuid
 * 
 * provamos con 
 ** node server.js
 */