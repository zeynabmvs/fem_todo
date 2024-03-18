export default function Header() {
  return (
    <div className="app__header flex flex-d-r flex-jc-sb flex-ai-b">
      <h1>TODO</h1>

      <div className="toggle__wrapper">
        <button
          //   onClick="setDarkMode()"
          id="dark"
          className="toggle-theme"
          title="Dark mode"
        >
          <img src="/images/icon-moon.svg" alt="Dark mode" />
        </button>
        <button
          //   onClick="setLightMode()"
          id="light"
          className="toggle-theme"
          title="Light mode"
        >
          <img src="/images/icon-sun.svg" alt="Light mode" />
        </button>
      </div>
    </div>
  );
}
