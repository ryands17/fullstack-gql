import * as React from 'react';
import { ApolloQueryResult } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { Todo, useTodosQuery } from 'generated/query-hooks';
import { GET_TODOS } from 'graphql/todos';
import {
  initializeApollo,
  addApolloState,
  ApolloState,
} from 'lib/apolloClient';
import { Header } from 'components/Header';
import { TodoItem } from 'components/TodoItem';
import { Footer } from 'components/Footer';
import { FILTERS, FILTER } from 'utils/constants';

type Props = ApolloState & ApolloQueryResult<{ todos: Todo[] }>;

const Todos = () => {
  let [filter, setFilter] = React.useState<FILTER>('ALL');
  let { data } = useTodosQuery();

  let completedTodos = React.useMemo(() => {
    return data.todos.filter(t => !t.completed).length;
  }, [data]);

  return (
    <div id="app">
      <section className="todoapp">
        <Header />
        <section className="main">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            readOnly
            /* checked */
          />
          <label htmlFor="toggle-all" /*onClick={this.props.onCompleteAll} */ />

          <ul className="todo-list">
            {data.todos
              .filter(todo => {
                if (filter === 'ACTIVE') return !todo.completed;
                if (filter === 'COMPLETED') return todo.completed;
                return true;
              })
              .map(todo => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
          </ul>
        </section>
        <Footer
          remainingTodos={completedTodos}
          filter={filter}
          onFilterSwitch={filter => setFilter(filter)}
        />
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  let apolloClient = initializeApollo();

  let result = await apolloClient.query({
    query: GET_TODOS,
  });

  return addApolloState(apolloClient, {
    props: result,
  });
};

export default Todos;
