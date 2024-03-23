import { useContext } from "react";
import { ToDoContext } from "../contexts";
import { Draggable } from "react-beautiful-dnd";

export default function TaskItem({ todo, index }) {
  const { toggleCompleted, handleDelete } = useContext(ToDoContext);

  return (
    <Draggable
      key={todo.id.toString()}
      draggableId={todo.id.toString()}
      index={index}
    >
      {(provided) => (
        <li
          className={"task item " + (todo.completed ? "completed" : "active")}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <input
            className={"checkbox " + (todo.completed ? "completed" : "active")}
            type="checkbox"
            maxLength="200"
            onClick={() => toggleCompleted(todo.id)}
            name="checkbox"
          ></input>
          <p>{todo.text}</p>
          <button
            className="delete_btn"
            onClick={() => handleDelete(todo.id)}
          ></button>
        </li>
      )}
    </Draggable>
  );
}
