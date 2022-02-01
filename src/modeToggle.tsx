import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { setTheme } from "./themes";

function ModeToggle() {
  const [togClass, setTogClass] = useState(true);
  const theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass(false);
    } else {
      setTheme("theme-dark");
      setTogClass(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass(true);
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass(false);
    }
  }, [theme]);

  return (
    <div className="container--toggle">
      <DarkModeToggle onChange={handleOnClick} checked={togClass} size={80} />
    </div>
  );
}

export default ModeToggle;
