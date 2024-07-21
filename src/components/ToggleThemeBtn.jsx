import { useState, useEffect } from "react";

export default function ToggleThemeBtn() {

  function getInitialTheme () {
    const storageTheme = localStorage.getItem("theme");

    let currentTheme;

    if (storageTheme) {
      currentTheme = storageTheme;
    } else {
      const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      currentTheme = darkModeQuery.matches ? "light" : "dark";
    }

    return currentTheme
  }

  const [theme, setTheme] = useState(getInitialTheme);

  function toggleTheme() {
    // Toggle theme
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function handleColorPrefer(e) {
      if (!'theme' in localStorage) {
        e.matches ? setTheme("dark") : setTheme("light");
      }
    }

    // listening for changes in prefer color scheme
    darkModeQuery.addEventListener("change", handleColorPrefer);

    // Clean up the listener
    return () => {
      darkModeQuery.removeEventListener("change", handleColorPrefer);
    };
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const buttonImgSources = {
    light: "/images/icon-moon.svg",
    dark: "/images/icon-sun.svg",
  };

  return (
    <button onClick={toggleTheme} title="Toggles light & dark">
      <img src={buttonImgSources[theme]} />
    </button>
  );
}
