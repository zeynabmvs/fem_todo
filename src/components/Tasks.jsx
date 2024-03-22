import { useEffect, useState } from "react";
import { ToDoContext, FilterContext } from "../contexts";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";
import TaskFilters from "./TaskFilters";

const initialTasks = [
  { id: 12345678, text: "buy groceries", completed: false },
  { id: 12345675, text: "go to dentist", completed: false },
  { id: 12345670, text: "read book", completed: false },
];

export default function Tasks() {
  const getTodosFromLocal = () => {
    const savedTodods = localStorage.getItem("todos");
    if (savedTodods) {
      return JSON.parse(savedTodods);
    } else return initialTasks;
  };

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(getTodosFromLocal());
  const [currentFilter, setCurrentFilter] = useState("all");

  useEffect(() => {
    // Update todos
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
      <ToDoContext.Provider
        value={{ todos, setTodos, toggleCompleted, handleDelete }}
      >
        <FilterContext.Provider value={{ currentFilter, filteredTodos, setCurrentFilter }}>
          <div className="app__main">
            <TaskForm
              inputValue={inputValue}
              handleInputValue={setInputValue}
            />
            <TasksList />
          </div>
          <div className="app__footer item flex flex-d-r flex-jc-sb flex-ai-c border-r-bottom">
            <span className="items_count">
              {todos.filter((todo) => !todo.completed).length} items Left
            </span>
            <TaskFilters />
            <button
              className="footer_btn"
              onClick={(e) => {
                setTodos(todos.filter((todo) => !todo.completed));
              }}
            >
              Clear Completed
            </button>
          </div>
        </FilterContext.Provider>
      </ToDoContext.Provider>
    </>
  );
}
