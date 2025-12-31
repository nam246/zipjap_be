import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { grammarData } from './seed-data/grammar-data';
import { kanjisData } from './seed-data/kanji-data';
import vocabularyData from './seed-data/vocabulary-data';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });
async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice Erice',
      username: 'admin',
      password: 'admin',
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
      username: 'bobbiesboba12',
      password: '123456789',
    },
  });
  console.log({ alice, bob });

  for (const grammar of grammarData) {
    const { examples, ...grammarWithoutExamples } = grammar;

    await prisma.grammar.create({
      data: {
        ...grammarWithoutExamples,
        examples: {
          create: examples,
        },
      },
    });
  }
  console.log('created grammar data');

  for (const vocabulary of vocabularyData) {
    const { examples, ...data } = vocabulary;

    await prisma.vocabulary.create({
      data: {
        ...data,
        examples: {
          create: examples,
        },
      },
    });
  }
  console.log('created vocabulary data');

  for (const kanji of kanjisData) {
  }

  console.log('kanji create pending...');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
