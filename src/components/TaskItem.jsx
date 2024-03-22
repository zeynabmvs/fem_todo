import { useContext } from "react";
import { ToDoContext } from "../contexts";

export default function TaskItem({ todo, index }) {
  const { toggleCompleted, handleDelete } = useContext(ToDoContext);

  return (
    <div
      className={"task item " + (todo.completed ? "completed" : "active")}
      
    >
      <input
        className={"checkbox " + (todo.completed ? "completed" : "active")}
        type="checkbox"
        maxLength="200"
        onClick={() => toggleCompleted(todo.id)}
      ></input>
      <p>{todo.text}</p>
      <button
        className="delete_btn"
        onClick={() => handleDelete(todo.id)}
      ></button>
    </div>
  );
}