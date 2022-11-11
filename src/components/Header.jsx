import React, { useState, useEffect } from "react";
import { SiteLogo } from "./SiteLogo";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  // State for menu
  const [isOpen, setIsOpen] = useState(true);
  // Check screen size and if menu is open upon re-render -> add and remove event listener on resize and check conditionals again
  useEffect(() => {
    const updateMedia = () => {
      if (window.innerWidth >= 800) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    updateMedia();
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  // Navigation Links that for some reason I wrote individually at first
  const navLinks = [
    {
      page: "/projects",
      path: "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z",
      text: "Projects",
    },
    {
      page: "/about",
      path: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
      text: "About",
    },
    {
      page: "/blog",
      path: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
      text: "Blog",
    },
  ];
  return (
    <nav>
      {/* Mobile Nav Bar with menu toggle */}
      <button
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-1 right-1 z-30 flex justify-end rounded-xl bg-nav text-dark dark:bg-darkNav dark:text-light dark:hover:text-daSe md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-12 w-12"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            ></path>
          )}
        </svg>
      </button>
      {/* Side Navigation, toggle in smaller screens and active in bigger screens */}
      <div
        id="main-nav"
        className={`${
          isOpen ? "fixed" : "hidden"
        } left-0 h-full w-full transform border-r bg-nav text-dark transition ease-in-out  dark:bg-darkNav dark:text-light sm:w-[200px] sm:max-w-[200px] md:relative md:translate-x-0 `}
      >
        <div className="top-0 flex flex-col items-start justify-start md:sticky ">
          {/* Site Logo and Name  */}
          <SiteLogo />
          {/* <!-- Navigation Links  -->  */}
          <div className="mx-auto flex w-full flex-col items-start justify-center gap-y-2.5 py-11 ">
            {navLinks.map((navLink, i) => (
              <a
                key={i}
                href={navLink.page}
                className="flex w-full flex-wrap items-center justify-start gap-4 py-3 pl-5 text-lg hover:bg-liNH hover:text-secondary dark:hover:bg-daNH dark:hover:text-daSe"
              >
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
                    d={navLink.path}
                  ></path>
                </svg>
                {navLink.text}
              </a>
            ))}
          </div>
          {/* <!-- Social Media Div -->  */}
          <div className="flex w-full flex-wrap items-center justify-center gap-2.5 py-4 ">
            <a href="mailto:danial.daneshfar@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                ></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/danialdan/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
              </svg>
            </a>
            <a href="https://github.com/Dandazine">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          {/* <!-- Theme Buttons Div  -->  */}
          <div className="flex w-full flex-wrap justify-center gap-3 py-6 ">
            {/* <!-- Light Mode and Dark Mode -->  */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
