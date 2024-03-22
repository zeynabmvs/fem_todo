import { useContext } from "react";
import { ToDoContext, FilterContext } from "../contexts";
import TaskItem from "./TaskItem";


export default function TasksList() {
  const { currentFilter, filteredTodos } = useContext(FilterContext);
  
  return (
    <div className="app_tasks">
      {filteredTodos(currentFilter)
        .sort((a, b) => b.id - a.id)
        .map((todo, index) => {
          return (
            <TaskItem todo={todo} index={index} key={index}/>
          );
        })}
    </div>
  );
}
