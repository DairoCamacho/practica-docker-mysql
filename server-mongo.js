import express from 'express';
import mongoose from 'mongoose';

const app = express();

const mongoConnection = await mongoose.connect('mongodb://localhost:27017/test');

// let response = mongoConnection.connection.readyState;
// console.log('state: ', response);
// response = await mongoConnection.connection.db.command({ ping: 1 });
// console.log('ping: ', response);
// response = await mongoConnection.connection.db.databaseName;
// console.log('database Name: ', response);

app.get('/mongo', async (req, res) => {
  const response = await mongoConnection.connection.db.databaseName;
  // res.send('Hello World');
  res.send(JSON.stringify(response));
});

const port = 3000;
app.listen(port);
console.log('Server on port ', port);