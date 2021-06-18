import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodo: Todo;
  updateTodo: Todo;
};

export type MutationAddTodoArgs = {
  text: Scalars['String'];
};

export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  input?: Maybe<UpdateTodoInput>;
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  text: Scalars['String'];
  completed: Scalars['Boolean'];
};

export type UpdateTodoInput = {
  text?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
};

export type TodosQueryVariables = Exact<{ [key: string]: never }>;

export type TodosQuery = { __typename?: 'Query' } & {
  todos: Array<
    { __typename?: 'Todo' } & Pick<Todo, 'id' | 'text' | 'completed'>
  >;
};

export type AddTodoMutationVariables = Exact<{
  text: Scalars['String'];
}>;

export type AddTodoMutation = { __typename?: 'Mutation' } & {
  addTodo: { __typename?: 'Todo' } & Pick<Todo, 'id' | 'text' | 'completed'>;
};

export const TodosDocument = gql`
  query todos {
    todos {
      id
      text
      completed
    }
  }
`;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(
  baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TodosQuery, TodosQueryVariables>(
    TodosDocument,
    options
  );
}
export function useTodosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(
    TodosDocument,
    options
  );
}
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<
  TodosQuery,
  TodosQueryVariables
>;
export const AddTodoDocument = gql`
  mutation addTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      completed
    }
  }
`;
export type AddTodoMutationFn = Apollo.MutationFunction<
  AddTodoMutation,
  AddTodoMutationVariables
>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function useAddTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddTodoMutation,
    AddTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(
    AddTodoDocument,
    options
  );
}
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<
  AddTodoMutation,
  AddTodoMutationVariables
>;
