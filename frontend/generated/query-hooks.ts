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
  updateTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
  clearCompleted?: Maybe<Scalars['Boolean']>;
};

export type MutationAddTodoArgs = {
  text: Scalars['String'];
};

export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  input?: Maybe<UpdateTodoInput>;
};

export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};

export type MutationClearCompletedArgs = {
  ids: Array<Scalars['ID']>;
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

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['ID'];
  input?: Maybe<UpdateTodoInput>;
}>;

export type UpdateTodoMutation = { __typename?: 'Mutation' } & {
  updateTodo?: Maybe<
    { __typename?: 'Todo' } & Pick<Todo, 'id' | 'text' | 'completed'>
  >;
};

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteTodoMutation = { __typename?: 'Mutation' } & {
  deleteTodo?: Maybe<{ __typename?: 'Todo' } & Pick<Todo, 'id'>>;
};

export type ClearCompletedMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;

export type ClearCompletedMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'clearCompleted'
>;

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
export const UpdateTodoDocument = gql`
  mutation updateTodo($id: ID!, $input: UpdateTodoInput) {
    updateTodo(id: $id, input: $input) {
      id
      text
      completed
    }
  }
`;
export type UpdateTodoMutationFn = Apollo.MutationFunction<
  UpdateTodoMutation,
  UpdateTodoMutationVariables
>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTodoMutation,
    UpdateTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(
    UpdateTodoDocument,
    options
  );
}
export type UpdateTodoMutationHookResult = ReturnType<
  typeof useUpdateTodoMutation
>;
export type UpdateTodoMutationResult =
  Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<
  UpdateTodoMutation,
  UpdateTodoMutationVariables
>;
export const DeleteTodoDocument = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;
export type DeleteTodoMutationFn = Apollo.MutationFunction<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTodoMutation,
    DeleteTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(
    DeleteTodoDocument,
    options
  );
}
export type DeleteTodoMutationHookResult = ReturnType<
  typeof useDeleteTodoMutation
>;
export type DeleteTodoMutationResult =
  Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>;
export const ClearCompletedDocument = gql`
  mutation clearCompleted($ids: [ID!]!) {
    clearCompleted(ids: $ids)
  }
`;
export type ClearCompletedMutationFn = Apollo.MutationFunction<
  ClearCompletedMutation,
  ClearCompletedMutationVariables
>;

/**
 * __useClearCompletedMutation__
 *
 * To run a mutation, you first call `useClearCompletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearCompletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearCompletedMutation, { data, loading, error }] = useClearCompletedMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useClearCompletedMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClearCompletedMutation,
    ClearCompletedMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClearCompletedMutation,
    ClearCompletedMutationVariables
  >(ClearCompletedDocument, options);
}
export type ClearCompletedMutationHookResult = ReturnType<
  typeof useClearCompletedMutation
>;
export type ClearCompletedMutationResult =
  Apollo.MutationResult<ClearCompletedMutation>;
export type ClearCompletedMutationOptions = Apollo.BaseMutationOptions<
  ClearCompletedMutation,
  ClearCompletedMutationVariables
>;
