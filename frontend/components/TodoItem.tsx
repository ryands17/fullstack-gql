import * as React from 'react';
import { Todo } from 'generated/query-hooks';
import classnames from 'classnames';

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  let [updatedText, setUpdatedText] = React.useState('');

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // check for Escape and Enter
    setUpdatedText('');
  };

  return (
    <li className={classnames({ completed: todo.completed, editing: false })}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} />
        <label onDoubleClick={() => {}}>{todo.text}</label>
        <button className="destroy" onClick={() => {}} />
      </div>
      {false && (
        <input
          className="edit"
          value={updatedText}
          onChange={e => setUpdatedText(e.target.value)}
          onKeyPress={onKeyPress}
        />
      )}
    </li>
  );
};
