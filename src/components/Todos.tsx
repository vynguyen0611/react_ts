import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

// forward props chain from App > Todos > TodoItem
// const Todos: React.FC<{
//   items: Todo[];
//   onRemoveTodo: (id: string) => void;
// }> = () => {

// useContext
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        // FIRST, we set this keyword will refer to in this to be called function, and we don't care about that here so, I'll set that to null.
        // second: the first argument onRemoveTodo will then receive later
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
