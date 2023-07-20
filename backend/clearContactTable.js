const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function clearContactTable() {
  try {
    await prisma.contact.deleteMany();
    console.log('Table Contact cleared successfully.');
  } catch (error) {
    console.error('Error clearing the Contact table:', error);
  } finally {
    await prisma.$disconnect();
  }
}
clearContactTable();
