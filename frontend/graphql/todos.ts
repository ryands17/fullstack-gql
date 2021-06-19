import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query todos {
    todos {
      id
      text
      completed
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      completed
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $input: UpdateTodoInput) {
    updateTodo(id: $id, input: $input) {
      id
      text
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;

export const CLEAR_COMPLETED = gql`
  mutation clearCompleted($ids: [ID!]!) {
    clearCompleted(ids: $ids)
  }
`;
