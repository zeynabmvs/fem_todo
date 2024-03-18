export default function Tasks() {
  return (
    <div className="app__main">
      <div id="add_task" className="item border-r-all">
        <input type="checkbox" name="checkbox-disabled" disabled />
        <input type="text" name="new_task" placeholder="Create a new todo..." />
      </div>

      <div className="app_tasks"></div>
    </div>
  );
}
