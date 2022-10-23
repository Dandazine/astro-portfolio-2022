import React, { useRef } from "react";
import { Navigation } from "./Navigation";

const Header = () => {
  const desktopNavRef = useRef();
  const toggleMenu = () => {
    desktopNavRef.current.class.toggle("-translate-x-full");
  };
  return (
    <header className="site-header max-h-screen">
      {/* Mobile bar  */}
      <div className="fixed bottom-0 z-20 flex w-screen  items-center justify-end bg-[#f9d72f] p-2 lg:hidden">
        <button
          onClick={() => {
            toggleMenu();
          }}
        >
          click
        </button>
      </div>
      {/* Sidebar Nav  */}
      <div
        className="child:transition-all lg:mid absolute left-0 z-10 flex h-screen w-screen -translate-x-full transform flex-col bg-[#f9d72f] px-5 py-7 transition duration-150 ease-in-out md:w-[250px] lg:sticky lg:max-h-screen lg:translate-x-0 "
        ref={desktopNavRef}
      >
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
