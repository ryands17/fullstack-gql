import { gql } from 'mercurius-codegen';

export const ADD_TODO = gql`
  mutation addTodo($text: String!) {
    addTodo(text: $text) {
      text
      completed
    }
  }
`;

export const GET_TODOS = gql`
  query getTodos {
    todos {
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
      text
      completed
    }
  }
`;
