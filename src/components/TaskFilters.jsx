import { useContext } from "react";
import { FilterContext } from "../contexts";

export default function TaskFilters() {
  const { setCurrentFilter } = useContext(FilterContext);

  return (
    <div className="footer_filters item">
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
  );
}
