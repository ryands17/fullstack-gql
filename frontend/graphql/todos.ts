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
