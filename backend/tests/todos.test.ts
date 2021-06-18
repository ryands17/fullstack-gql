import { getClient } from './helpers';
import { ADD_TODO, GET_TODOS, UPDATE_TODO } from './queries';

const client = getClient();

it('should add a todo', async () => {
  let text = 'todo 1';
  let response = await client.mutate(ADD_TODO, { variables: { text } });
  expect(response.data).toEqual({ addTodo: { text, completed: false } });

  text = 'todo 2';
  response = await client.mutate(ADD_TODO, { variables: { text } });
  expect(response.data).toEqual({ addTodo: { text, completed: false } });
});

it('should list correct amount of todos', async () => {
  let response = await client.query(GET_TODOS);
  expect(response.data.todos).toBeDefined();
  expect(response.data.todos).toHaveLength(2);
});

it('should allow editing todos', async () => {
  let todos = await client.query(GET_TODOS);
  let todo = todos.data.todos[0];

  let input = { text: 'new todo 1', completed: true };
  let response = await client.mutate(UPDATE_TODO, {
    variables: { id: todo.id, input },
  });
  expect(response.data.updateTodo).toBeDefined();
  expect(response.data.updateTodo).toMatchObject(input);
});
