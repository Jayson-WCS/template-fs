// seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function clearDatabase() {
  try {
    await prisma.contact.deleteMany({});
    await prisma.project.deleteMany({});
    await prisma.tag.deleteMany({});
    console.log("BDD crystal clear !");
  } catch (error) {
    console.error("Error clearing database:", error);
  }
}

async function seedTags() {
  try {
    await prisma.tag.createMany({
      data: [
        { name: "html" },
        { name: "css" },
        { name: "javascript" },
        { name: "react" },
        { name: "sass" },
        { name: "node" },
        { name: "mysql" },
      ],
      skipDuplicates: true,
    });
    console.log("Tags seeding completed.");
  } catch (error) {
    console.error("Error seeding tags:", error);
  }
}

async function seedProjects() {
  try {
    const tags = await prisma.tag.findMany();
    await prisma.project.create({
      data: {
        title: "Omnifood",
        projectURL: "https://jayson-wcs.github.io/projet-omnifood/#",
        description: "Welcome to Omnifood! This is a landing page for our premium food delivery service, where we prioritize quality, convenience, and healthy eating.",
        tags: {
          connect: [
            { id: tags.find((tag) => tag.name === "html").id },
            { id: tags.find((tag) => tag.name === "css").id },
            { id: tags.find((tag) => tag.name === "javascript").id },
          ],
        },
      },
      include: {
        tags: true,
      },
    });
    await prisma.project.create({
      data: {
        title: "Travel Agency",
        projectURL: "https://jayson-wcs.github.io/projet-travel-agency/#",
        description: "Welcome to Travel Agency! This is a landing page for a travel booking planner agency.",
        tags: {
          connect: [
            { id: tags.find((tag) => tag.name === "html").id },
            { id: tags.find((tag) => tag.name === "css").id },
            { id: tags.find((tag) => tag.name === "javascript").id },
          ],
        },
      },
      include: {
        tags: true,
      },
    });
    await prisma.project.create({
      data: {
        title: "Snake",
        projectURL: "https://jayson-wcs.github.io/projet-snake/",
        description: "Welcome to the Snake Game! This is a JavaScript implementation of the classic Snake game, where you control a snake to eat food and grow longer without hitting the walls or yourself.",
        tags: {
          connect: [
            { id: tags.find((tag) => tag.name === "html").id },
            { id: tags.find((tag) => tag.name === "css").id },
            { id: tags.find((tag) => tag.name === "javascript").id },
          ],
        },
      },
      include: {
        tags: true,
      },
    });
    await prisma.project.create({
      data: {
        title: "Doruido",
        projectURL: "",
        description: "Welcome to Doruido! This is a personal project based on a passion of mine, Japanimation. It will provide a platform to get cultural news about animes, mangas and Japanese art scene.",
        tags: {
          connect: [
            { id: tags.find((tag) => tag.name === "react").id },
            { id: tags.find((tag) => tag.name === "sass").id },
            { id: tags.find((tag) => tag.name === "node").id },
            { id: tags.find((tag) => tag.name === "mysql").id },
          ],
        },
      },
      include: {
        tags: true,
      },
    });
    await prisma.project.create({
      data: {
        title: "Hackathon Alibi",
        projectURL: "",
        description: "Welcome to the Alibi Hackathon! First participation in the Wild Code School Hackathon, this mini project was carried out in teams of 5 in 24 hours. Landing page for an atypical travel agency... Who knows, you might just find what you're looking for!",
        tags: {
          connect: [
            { id: tags.find((tag) => tag.name === "react").id },
            { id: tags.find((tag) => tag.name === "sass").id },
          ],
        },
      },
      include: {
        tags: true,
      },
    });
    await prisma.project.create({
      data: {
        title: "Flipper",
        projectURL: "",
        description: "Welcome to Flipper! Project based on the visual and interactive reproduction of a social network (Twitter). Group work at Wild Code School.",
        tags: {
          connect: [
            { id: tags.find((tag) => tag.name === "html").id },
            { id: tags.find((tag) => tag.name === "css").id },
            { id: tags.find((tag) => tag.name === "javascript").id },
          ],
        },
      },
      include: {
        tags: true,
      },
    });
    console.log("Projects seeding completed.");
  } catch (error) {
    console.error("Error seeding projects:", error);
  }
}

async function seedDatabase() {
  try {
    await prisma.contact.createMany({
      data: [
        {
          username: "Kelly",
          email: "kelly@theoffice.io",
          message: "Hi, I've created WOOF but Ryan stole the idea from me !"
        },
        {
          username: "Bob",
          email: "bob@theoffice.io",
          message: "Hi there, this is Bob from Bob Vance Refrigeration."
        },
        {
          username: "Dwight",
          email: "dwight@theoffice.io",
          message: "Hi there, this is Bob from Bob Vance Refrigeration."
        },
        {
          username: "Kevin",
          email: "kevin@theoffice.io",
          message: "I need a website for my Bar, can you help me ?"
        },
      ],
    });

    console.log("Database seeding completed.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

async function seedAll() {
  await seedTags();
  await seedProjects();
  await seedDatabase();
  await prisma.$disconnect();
}

seedAll();
