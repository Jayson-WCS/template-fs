require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT;
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.post('/create', async (req, res) => {
  const { username, email, message } = req.body;
  try {
    const newContact = await prisma.contact.create({
      data: {
        username,
        email,
        message,
      },
    });
    res.status(201).json('Post created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json('An error occurred while posting.');
  }
});

app.get('/contacts', async (req, res) => {
  try {
    const latestContacts = await prisma.contact.findMany({
      orderBy: { id: 'desc' },
      take: 2,
    });
    res.json(latestContacts);
  } catch (err) {
    console.error(err);
    res.status(500).json('Une erreur est survenue lors de la récupération des contacts.');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

