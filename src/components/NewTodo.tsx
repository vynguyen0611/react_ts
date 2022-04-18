import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

// that onAddTodo will be a function,
// that's a function that returns nothing but takes one parameter (enteredText), which is of type string

// const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);


  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // ? : enteredText can be null
    // const enteredText = todoTextInputRef.current?.value;
    // but we need enteredText not null (is parsed to html input element) before submitHandler is called => !
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);

    todoTextInputRef.current!.value = '';
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
