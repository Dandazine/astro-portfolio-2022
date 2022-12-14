import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  // Theme choices
  const themes = ["light", "dark"];
  // Check to see if the component is ready for use
  const [loaded, setloaded] = useState(false);
  const [theme, setTheme] = useState(() => {
    // makes sure it's not server side rendering, stops the react "can't define window" error
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
    <div className=" inline-flex items-center rounded-3xl border p-[1px] ease-in-out">
      {themes.map((i) => {
        const checked = i === theme;
        return (
          <button
            key={i}
            className={`${
              checked ? "bg-daNH text-light dark:bg-liNH dark:text-dark" : ""
            } cursor pointer rounded-3xl p-1.5 duration-150 ease-in`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {i === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
};

export default ThemeToggle;
