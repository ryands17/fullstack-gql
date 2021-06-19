import { useAddTodoMutation } from 'generated/query-hooks';
import { GET_TODOS } from 'graphql/todos';
import * as React from 'react';
import { ENTER_KEY } from 'utils/constants';

const AddTodo = () => {
  let [mutate] = useAddTodoMutation();
  let [text, setText] = React.useState('');

  const handleSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== ENTER_KEY) {
      return;
    }

    await mutate({
      variables: { text },
      refetchQueries: [{ query: GET_TODOS }],
      awaitRefetchQueries: true,
    });
    setText('');
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      value={text}
      onChange={e => setText(e.target.value)}
      onKeyUp={handleSubmit}
    />
  );
};

export const Header = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      <AddTodo />
    </header>
  );
};
