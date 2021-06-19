import * as React from 'react';
import {
  Todo,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from 'generated/query-hooks';
import classnames from 'classnames';
import { ENTER_KEY, ESCAPE_KEY } from 'utils/constants';
import { GET_TODOS } from 'graphql/todos';

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  let [updatedText, setUpdatedText] = React.useState('');
  let [editing, isEditing] = React.useState(false);
  let inputRef = React.useRef<HTMLInputElement>(null);
  let [editTodo] = useUpdateTodoMutation();
  let [deleteTodo] = useDeleteTodoMutation();

  const updateTodo = async (todo: Todo) => {
    await editTodo({
      variables: {
        id: todo.id,
        input: { completed: todo.completed, text: todo.text },
      },
      optimisticResponse: {
        updateTodo: { ...todo },
      },
    });
    isEditing(false);
    setUpdatedText('');
  };

  React.useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, todo: Todo) => {
    if (e.key === ESCAPE_KEY) {
      isEditing(false);
      setUpdatedText('');
    } else if (e.key === ENTER_KEY) {
      updateTodo({ ...todo, text: updatedText });
    }
  };

  return (
    <li className={classnames({ completed: todo.completed, editing })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
        />
        <label
          onDoubleClick={() => {
            isEditing(true);
            setUpdatedText(todo.text);
          }}
        >
          {todo.text}
        </label>
        <button
          className="destroy"
          onClick={() => {
            deleteTodo({
              variables: { id: todo.id },
              refetchQueries: [{ query: GET_TODOS }],
              awaitRefetchQueries: true,
            });
          }}
        />
      </div>
      {isEditing && (
        <input
          className="edit"
          value={updatedText}
          ref={inputRef}
          onChange={e => setUpdatedText(e.target.value)}
          onKeyUp={e => onKeyUp(e, todo)}
        />
      )}
    </li>
  );
};
