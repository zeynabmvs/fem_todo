import { useState } from "react";

const initialTasks = [
  { id: 12345678, text: "buy groceries", completed: false },
  { id: 12345675, text: "go to dentist", completed: false },
  { id: 12345670, text: "read book", completed: false },
];

export default function Tasks() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(initialTasks);
  const [currentFilter, setCurrentFilter] = useState("all");
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

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = (currentFilter) => {
    switch (currentFilter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };
  return (
    <>
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
          {filteredTodos(currentFilter)
            .sort((a, b) => b.id - a.id)
            .map((todo, index) => {
              return (
                <div
                  className={
                    "task item " + (todo.completed ? "completed" : "active")
                  }
                  key={index}
                >
                  <input
                    className={
                      "checkbox " + (todo.completed ? "completed" : "active")
                    }
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
            })}
        </div>
      </div>
      <div className="app__footer item flex flex-d-r flex-jc-sb flex-ai-c border-r-bottom">
        <span className="items_count">
          {todos.filter((todo) => !todo.completed).length} items Left
        </span>
        <div className="flex flex-jc-sb" style={{ gap: "8px" }}>
          <button
            className="footer_btn"
            onClick={(e) => {
              setCurrentFilter("all");
            }}
          >
            all
          </button>
          <button
            className="footer_btn"
            onClick={(e) => {
              setCurrentFilter("active");
            }}
          >
            Active
          </button>
          <button
            className="footer_btn"
            onClick={(e) => {
              setCurrentFilter("completed");
            }}
          >
            Completed
          </button>
        </div>
        <button
          className="footer_btn"
          onClick={(e) => {
            setTodos(todos.filter((todo) => !todo.completed));
          }}
        >
          Clear Completed
        </button>
      </div>
    </>
  );
}
