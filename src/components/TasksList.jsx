import { useContext } from "react";
import { FilterContext } from "../contexts";
import TaskItem from "./TaskItem";
import { Droppable } from "react-beautiful-dnd";

export default function TasksList() {
  const { currentFilter, filteredTodos } = useContext(FilterContext);

  return (
    <Droppable droppableId="tasks">
      {(provided) => (
        <ul
          className="app_tasks"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {filteredTodos(currentFilter)
            .map((todo, index) => {
              return <TaskItem todo={todo} index={index} key={index} />;
            })}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}
