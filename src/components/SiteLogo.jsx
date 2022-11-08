import React from "react";
import logo from "/logo.svg";

export const SiteLogo = () => {
  return (
    <a
      href="./"
      className="flex w-full flex-col flex-wrap items-center justify-center pt-11 text-[32px] text-primary"
    >
      <div className="w-[80px] max-w-[80px]">
        <img src={logo} alt="Site Logo" />
      </div>
      DanCakes
    </a>
  );
};
