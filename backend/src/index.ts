import { PrismaClient } from '@prisma/client';
import Fastify, { FastifyRequest, FastifyReply } from 'fastify';
import fastifyCors from 'fastify-cors';
import { makeExecutableSchema } from '@graphql-tools/schema';
import mercurius from 'mercurius';
import mercuriusCodegen from 'mercurius-codegen';
import { typeDefs, resolvers } from './types';

export const app = Fastify();
export const prisma = new PrismaClient({ log: ['query'] });

const buildContext = async (req: FastifyRequest, _reply: FastifyReply) => ({
  prisma,
});

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T;

declare module 'mercurius' {
  interface MercuriusContext
    extends PromiseType<ReturnType<typeof buildContext>> {}
}

// @ts-ignore
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.register(fastifyCors, { origin: '*' });

app.register(mercurius, {
  schema,
  context: buildContext,
  graphiql: 'playground',
});

mercuriusCodegen(app, {
  // Commonly relative to your root package.json
  targetPath: './src/graphql/generated.ts',
}).catch(console.error);

app.listen(4000, '0.0.0.0').then(() => console.log('App running on port 3000'));
