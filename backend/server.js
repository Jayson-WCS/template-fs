const { PrismaClient } = require('@prisma/client');
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT;
const cors = require('cors');
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

    res.status(201).json({ message: 'Post created successfully', post: newContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while posting.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
