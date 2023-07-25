const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', (req, res) => {
  res.send('Hello from the backend !');
});

router.post('/create', async (req, res) => {
  const { username, email, message } = req.body;
  try {
    const newContact = await prisma.contact.create({
      data: {
        username,
        email,
        message,
      },
    });
    res.status(201).json('Feedback posted with success !');
  } catch (error) {
    console.error(error);
    res.status(500).json('Lost in the pipes...');
  }
});

router.get('/contacts', async (req, res) => {
  try {
    const latestContacts = await prisma.contact.findMany({
      orderBy: { id: 'desc' },
      take: 2,
    });
    res.json(latestContacts);
  } catch (err) {
    console.error(err);
    res.status(500).json('Où sont les gens ?!');
  }
});

router.get('/projects', async (req,res) => {
  try {
    const allProjects = await prisma.project.findMany();
    res.json(allProjects);
  } catch (err) {
    console.error(err);
    res.status(500).json('Où sont les projets ?!');
  }
})

router.get('/tags', async (req,res) => {
  try {
    const allProjects = await prisma.tag.findMany();
    res.json(allProjects);
  } catch (err) {
    console.error(err);
    res.status(500).json('Où sontles étiquettes ?!');
  }
})

module.exports = router;
