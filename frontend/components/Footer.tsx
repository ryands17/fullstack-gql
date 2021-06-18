import { FILTERS, FILTER } from 'utils/constants';
import classnames from 'classnames';

type Props = {
  remainingTodos: number;
  filter: FILTER;
  onFilterSwitch: (filter: FILTER) => void;
};

export const Footer = ({ remainingTodos, filter, onFilterSwitch }: Props) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{remainingTodos}</strong>
        <span>{remainingTodos === 1 ? 'item' : 'items'} left</span>
      </span>

      <ul className="filters">
        {Object.entries(FILTERS).map(([key, val]) => (
          <li key={key}>
            <a
              href="./#"
              className={classnames({ selected: key === filter })}
              onClick={() => onFilterSwitch(key as FILTER)}
            >
              {val}
            </a>
          </li>
        ))}
      </ul>
      <button className="clear-completed" onClick={() => {}}>
        Clear completed
      </button>
    </footer>
  );
};
