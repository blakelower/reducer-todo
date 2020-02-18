export const ADD_TODO = "ADD_TODO";
export const initialState = {
  todos: [
    {
      item: "eat breakfast",
      completed: false,
      id: 1
    },
    {
      item: "workout",
      completed: false,
      id: 2
    },
    {
      item: "code til I fall into depression",
      completed: false,
      id: 3
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};