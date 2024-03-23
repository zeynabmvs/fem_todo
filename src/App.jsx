import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import ThemeContext from "./contexts";
import ToggleThemeBtn from "./components/ToggleThemeBtn";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <section className="app">
        <div className="app__header flex flex-d-r flex-jc-sb flex-ai-b">
          <h1>TODO</h1>
          <ToggleThemeBtn />
        </div>
        <Tasks />
        <p className="tip">Drag and drop to reorder list</p>
      </section>
    </ThemeContext.Provider>
  );
}

export default App;
