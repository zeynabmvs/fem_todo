import { useState } from "react";

const initialTasks = [
  { id: 12345678, text: "buy groceries", completed: false },
  { id: 12345675, text: "go to dentist", completed: false },
  { id: 12345670, text: "read book", completed: false },
];

export default function Tasks() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    const newToDo = { id: Date.now(), text: inputValue, completed: false };
    setTodos([...todos, newToDo]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app__main">
      <form id="add_task" onSubmit={handleSubmit}>
        <input
          className="item border-r-all"
          type="text"
          name="new_task"
          placeholder="Create a new todo..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </form>

      <div className="app_tasks">
        {todos.map((todo, index) => {
          return (
            <div
              className={
                "task item " + (todo.completed ? "completed" : "active")
              }
              key={index}
            >
              <input
                className="checkbox"
                type="checkbox"
                maxLength="200"
              ></input>
              <p>{todo.text}</p>
              <button
                className="delete_btn"
                onClick={() => handleDelete(todo.id)}
              ></button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
