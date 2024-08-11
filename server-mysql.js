import express from 'express';
import mysql from 'mysql2/promise';

const app = express();

const client = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
});

// const response = await client.query('SELECT 1 + 1');
// console.log(response);

app.get('/mysql', async (req, res) => {
  const response = await client.query('SELECT 1 + 1');
  // res.send('Hello World');
  res.send(JSON.stringify(response));
});

const port = 3000;
app.listen(port);
console.log('Server on port ', port);