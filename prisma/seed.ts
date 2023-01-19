import { prisma } from "./seed/seedConfig";

async function main() {
  await prisma.$executeRaw`TRUNCATE "Products" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE "CEP" RESTART IDENTITY CASCADE;`;

  await prisma.products.create({
    data: {
      name: "Max-Steel",
      category: "Action Figure",
      status: "ACTIVE",
      quantity: 12
    },
  });

  await prisma.products.create({
    data: {
      name: "Barbie",
      category: "Fantasy Figure",
      status: "ACTIVE",
      quantity: 10
    },
  });

  await prisma.products.create({
    data: {
      name: "Batman",
      category: "Action Figure",
      status: "ACTIVE",
      quantity: 120
    },
  });

  await prisma.products.create({
    data: {
      name: "Bob Esponja",
      category: "Action Figure",
      status: "ACTIVE",
      quantity: 30
    },
  });

}
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

