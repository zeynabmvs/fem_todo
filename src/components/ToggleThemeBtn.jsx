import { useState, useEffect } from "react";

export default function ToggleThemeBtn() {

  function getInitialTheme () {
    const storageTheme = localStorage.getItem("theme");

    let currentTheme;

    if (storageTheme) {
      currentTheme = storageTheme;
    } else {
      const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      currentTheme = darkModeQuery.matches ? "dark" : "light";
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

  // function handleToggleBtn() {
  //   // create a temporarys stylesheet for no-transition
  //   const css = document.createElement("style");
  //   css.type = "text/css";
  //   css.appendChild(
  //     document.createTextNode(
  //       `* {
  //            -webkit-transition: none !important;
  //            -moz-transition: none !important;
  //            -o-transition: none !important;
  //            -ms-transition: none !important;
  //            transition: none !important;
  //         }`
  //     )
  //   );
  //   document.head.appendChild(css);

  //   toggleTheme();

  //   // Calling getComputedStyle forces the browser to redraw
  //   window.getComputedStyle(css).opacity;
  //   document.head.removeChild(css);
  // }

  useEffect(() => {
    // const storageTheme = localStorage.getItem("theme");
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // let currentTheme;

    // if (storageTheme) {
    //   currentTheme = storageTheme;
    // } else {
    //   currentTheme = darkModeQuery.matches ? "dark" : "light";
    // }

    // document.body.className = currentTheme;
    // setTheme(currentTheme);

    function handleColorPrefer(e) {
      e.matches ? setTheme("dark") : setTheme("light");
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
