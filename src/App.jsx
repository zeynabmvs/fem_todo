import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import ThemeContext from "./contexts";
import ToggleThemeBtn from "./components/ToggleThemeBtn";

function toggleTheme(theme) {
  // create a temporarys stylesheet for no-transition
  const css = document.createElement("style");
  css.type = "text/css";
  css.appendChild(
    document.createTextNode(
      `* {
           -webkit-transition: none !important;
           -moz-transition: none !important;
           -o-transition: none !important;
           -ms-transition: none !important;
           transition: none !important;
        }`
    )
  );
  document.head.appendChild(css);

  // Toggle theme
  document.body.className = theme;

  // Calling getComputedStyle forces the browser to redraw
  window.getComputedStyle(css).opacity;
  document.head.removeChild(css);
}

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    toggleTheme(theme);
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
