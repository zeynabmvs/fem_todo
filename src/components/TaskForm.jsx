import { useContext } from "react";
import { ToDoContext } from "../contexts";

export default function TaskForm({ inputValue, handleInputValue }) {
  const { todos, setTodos } = useContext(ToDoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    const newToDo = { id: Date.now(), text: inputValue, completed: false };
    setTodos([...todos, newToDo]);
    handleInputValue("");
  };

  return (
    <form id="add_task" onSubmit={handleSubmit}>
      <input
        className="item border-r-all"
        type="text"
        name="new_task"
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={(e) => {
          handleInputValue(e.target.value);
        }}
        autoComplete="off"
      />
    </form>
  );
}
