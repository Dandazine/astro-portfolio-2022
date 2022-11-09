import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  // Theme choices
  const themes = ["light", "dark"];
  // Check to see if the component is ready for use
  const [loaded, setloaded] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Checks if window is defined
    if (import.meta.env.SSR) {
      return undefined;
    }
    // Check to see if they've already made a selection on the theme they'd like
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    // If no selection yet, choose based of browser preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  // Function to toggle theme
  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Adds and removes tailwind dark class when theme changes
  useEffect(() => {
    const doc = document.documentElement;
    if (theme === "light") {
      doc.classList.remove("dark");
    } else {
      doc.classList.add("dark");
    }
  }, [theme]);

  // Once all previous code is ran, and component is ready, sets loaded to true
  useEffect(() => {
    setloaded(true);
  }, []);

  return loaded ? (
    <div className="bg-orange-300 dark:bg-zinc-600 inline-flex items-center rounded-3xl p-[1px]">
      {themes.map((i) => {
        const checked = i === theme;
        return (
          <button
            key={i}
            className=""
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {i === "light" ? " hi" : "bye"}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
};

export default ThemeToggle;
