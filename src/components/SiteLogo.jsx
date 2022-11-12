import React from "react";

export const SiteLogo = () => {
  return (
    <a
      href="./"
      className="flex w-full flex-col flex-wrap items-center justify-center pt-11 pb-6 text-[32px] hover:text-secondary dark:hover:text-daSe"
    >
      <img src="/assets/logo.svg" alt="logo" />
      DanCakes
    </a>
  );
};
