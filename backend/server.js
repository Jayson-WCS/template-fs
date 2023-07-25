require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT;
const cors = require('cors');
const routes = require('./routes');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
