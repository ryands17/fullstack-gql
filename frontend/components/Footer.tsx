import { FILTERS, FILTER } from 'utils/constants';
import classnames from 'classnames';

type Props = {
  remainingTodos: number;
  filter: FILTER;
  onFilterSwitch: (filter: FILTER) => void;
  clearCompleted: () => void;
};

export const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.remainingTodos} </strong>
        <span>{props.remainingTodos === 1 ? 'item' : 'items'} left</span>
      </span>

      <ul className="filters">
        {Object.entries(FILTERS).map(([key, val]) => (
          <li key={key}>
            <a
              href="./#"
              className={classnames({ selected: key === props.filter })}
              onClick={() => props.onFilterSwitch(key as FILTER)}
            >
              {val}
            </a>
          </li>
        ))}
      </ul>
      <button className="clear-completed" onClick={props.clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};
