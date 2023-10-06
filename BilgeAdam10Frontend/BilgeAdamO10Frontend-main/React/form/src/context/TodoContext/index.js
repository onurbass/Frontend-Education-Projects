import { createContext, useReducer } from "react";
import reducer from "../../reducer/todoReducer";

const TodoContext = createContext();

const initialState = [];

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
export { TodoProvider };
