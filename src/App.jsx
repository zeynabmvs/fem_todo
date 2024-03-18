import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import ThemeContext from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const buttonImgSources = {
    light: "/images/icon-moon.svg",
    dark: "/images/icon-sun.svg",
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <section className="app">
        <div className="app__header flex flex-d-r flex-jc-sb flex-ai-b">
          <h1>TODO</h1>
          <button
            onClick={() => {
              if (theme == "dark") {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
          >
            <img src={buttonImgSources[theme]} />
          </button>
        </div>

        <Tasks />
        <Footer />
        <p className="tip">Drag and drop to reorder list</p>
      </section>
    </ThemeContext.Provider>
  );
}

export default App;
