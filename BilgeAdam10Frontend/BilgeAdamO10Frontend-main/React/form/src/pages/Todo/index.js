import { TodoProvider } from "../../context/TodoContext";
import TodoForm from "./form";
import TodoList from "./list";

const Todo = () => {
  return (
    <TodoProvider>
      <>
        <TodoForm />
        <TodoList />
      </>
    </TodoProvider>
  );
};

export default Todo;
