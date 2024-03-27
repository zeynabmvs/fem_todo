import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import ToggleThemeBtn from "./components/ToggleThemeBtn";

function App() {
  
  return (
    <section className="app">
      <div className="app__header flex flex-d-r flex-jc-sb flex-ai-b">
        <h1>TODO</h1>
        <ToggleThemeBtn />
      </div>
      <Tasks />
      <p className="tip">Drag and drop to reorder list</p>
    </section>
  );
}

export default App;
