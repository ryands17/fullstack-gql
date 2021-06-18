import { createMercuriusTestClient } from 'mercurius-integration-testing';
import { app, prisma } from '../src';

export const getClient = () => {
  const client = createMercuriusTestClient(app);

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });

  return client;
};
