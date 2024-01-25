import * as React from "react";
import { useState, useEffect } from "react";
import Button from "./Button/Button";

const ThemeSwitcher = () => {
  const [lightMode, setLightMode] = useState<boolean>(true);

  useEffect(() => {
    const isLightMode = localStorage.getItem("lightMode") === "true";
    setLightMode(isLightMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", lightMode);
    if (lightMode) {
      localStorage.setItem("lightMode", "lightMode");
    }
  }, [lightMode]);

  const toggleDarkMode = () => {
    setLightMode((prevMode) => !prevMode);
  };

  return (
    <Button
      text={lightMode ? "Dark Mode" : "Light Mode"}
      variant={lightMode ? "dark" : "light"}
      size="lg"
      onClick={toggleDarkMode}
    />
  );
};

export default ThemeSwitcher;
