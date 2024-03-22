import { useContext } from "react";
import { FilterContext } from "../contexts";

export default function TaskFilters() {
    const {setCurrentFilter} = useContext(FilterContext)

  return (
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
  );
}
