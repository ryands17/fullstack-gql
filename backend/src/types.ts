import { IResolvers } from 'mercurius';

export const resolvers: IResolvers = {
  Query: {
    todos: async (_parent, _args, ctx) => {
      return ctx.prisma.todo.findMany();
    },
  },
  Mutation: {
    addTodo: (_parent, args, ctx) => {
      return ctx.prisma.todo.create({ data: { text: args.text } });
    },
    updateTodo: (_parent, args, ctx) => {
      return ctx.prisma.todo.update({
        where: { id: args.id },
        data: {
          text: args.input?.text ?? undefined,
          completed: args.input?.completed ?? undefined,
        },
      });
    },
  },
};

export const typeDefs = `
  type Query {
    todos: [Todo!]!
  }

  type Mutation {
    addTodo(text: String!): Todo!
    updateTodo(id: ID!, input: UpdateTodoInput): Todo!
  }

  input UpdateTodoInput {
    text: String
    completed: Boolean
  }

  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }
`;
