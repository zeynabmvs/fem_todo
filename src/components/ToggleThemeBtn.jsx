import { useContext } from "react";
import ThemeContext from "../contexts";

export default function ToggleThemeBtn() {
  const { theme, setTheme } = useContext(ThemeContext);

  const buttonImgSources = {
    light: "/images/icon-moon.svg",
    dark: "/images/icon-sun.svg",
  };

  return (
    <button
      onClick={() => {
        theme == "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      <img src={buttonImgSources[theme]} />
    </button>
  );
}
