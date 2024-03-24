function useThemeToggle(theme) {
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
  const _ = window.getComputedStyle(css).opacity;
  document.head.removeChild(css);
}

export default useThemeToggle;
