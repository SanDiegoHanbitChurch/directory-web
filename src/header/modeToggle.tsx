import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { Box } from "@material-ui/core";
import { setTheme } from "../themes";

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
      <Box m={1} marginRight={12}>
        <DarkModeToggle onChange={handleOnClick} checked={togClass} size={80} />
      </Box>
    </div>
  );
}

export default ModeToggle;
