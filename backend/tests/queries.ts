export const ADD_TODO = `
  mutation addTodo($text: String!) {
    addTodo(text: $text) {
      text
      completed
    }
  }
`;

export const GET_TODOS = `
  query getTodos {
    todos {
      id
      text
      completed
    }
  }
`;

export const UPDATE_TODO = `
  mutation updateTodo($id: ID!, $input: UpdateTodoInput) {
    updateTodo(id: $id, input: $input) {
      id
      text
      completed
    }
  }
`;
