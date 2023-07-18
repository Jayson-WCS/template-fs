const { PrismaClient } = require('@prisma/client');
const express = require('express');
const app = express();
const port = 3306;
const cors = require('cors');
const prisma = new PrismaClient();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
