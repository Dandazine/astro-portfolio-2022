import React from "react";

export const Navigation = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Site Name and Site logo */}
      <div>
        <div className="site-logo"></div>
        <a href="./" className="site-name">
          Dandazine
        </a>
      </div>
      <div className="flex w-full flex-col items-end">
        {/* Nav Links  */}
        <a href="about" className="w-5/6 border-r-2 border-[#e0a82e] py-1.5">
          About
        </a>
        <a href="contact" className="w-5/6 py-1.5">
          Contact
        </a>
        <a href="archiveproject" className="w-5/6 py-1.5">
          Projects
        </a>
        <a href="blog" className="w-5/6 py-1.5">
          Blog
        </a>
        <a href="bingsooboys" className="w-5/6 py-1.5">
          Bingsoo Boys
        </a>
      </div>
    </div>
  );
};
