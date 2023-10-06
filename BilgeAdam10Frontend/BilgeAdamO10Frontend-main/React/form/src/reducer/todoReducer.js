export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

const reducer = (todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.todo];
    case REMOVE_TODO:
      return todos.filter((todo) => todo !== action.todo);

    default:
      return todos;
  }
};

export default reducer;
