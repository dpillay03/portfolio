import React from "react";
import "../style/_darkmode.scss";

const DarkMode = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-inner");

    // If dark mode is enabled - adds classes to update dark-mode styling.
    // Else, removes and styling is as normal.
    if (darkMode === true) {
      body.classList.add("dark-mode");
      toggle.classList.add("toggle-active");
    } else {
      body.classList.remove("dark-mode");
      toggle.classList.remove("toggle-active");
    }
  }, [darkMode]);

  return (
    <header>
      <div
        id='toggle'
        onClick={() =>
          darkMode === false ? setDarkMode(true) : setDarkMode(false)
        }
      >
        <div className='toggle-inner' />
      </div>
      <p
        className='darkModeText'
        onClick={() => darkMode((prevMode) => !prevMode)}
      >
        {darkMode ? "Dark Mode" : "Light Mode"}
      </p>
    </header>
  );
};

export default DarkMode;
