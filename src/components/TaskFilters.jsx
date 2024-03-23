import { useContext } from "react";
import { FilterContext } from "../contexts";

export default function TaskFilters() {
  const { currentFilter, setCurrentFilter } = useContext(FilterContext);
  
  return (
    <div className="footer_filters item">
      <button
        className={"footer_btn " + (currentFilter === "all" ? "active" : "")}
        onClick={(e) => {
          setCurrentFilter("all");
        }}
      >
        All
      </button>
      <button
        className={"footer_btn " + (currentFilter === "active" ? "active" : "")}
        onClick={(e) => {
          setCurrentFilter("active");
        }}
      >
        Active
      </button>
      <button
        className={"footer_btn " + (currentFilter === "completed" ? "active" : "")}
        onClick={(e) => {
          setCurrentFilter("completed");
        }}
      >
        Completed
      </button>
    </div>
  );
}
