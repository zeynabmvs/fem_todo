import { useContext } from "react";
import { ToDoContext, FilterContext } from "../contexts";
import TaskItem from "./TaskItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
            .sort((a, b) => b.id - a.id)
            .map((todo, index) => {
              return <TaskItem todo={todo} index={index} key={index} />;
            })}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>

  );
}
