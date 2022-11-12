import React from "react";
import { useState } from "react";

const Skills = () => {
  const [tab, setTab] = useState("dev");
  const tabSwitch = (change) => {
    if (change === "dev") {
      setTab("dev");
    } else if (change === "des") {
      setTab("des");
    } else {
      setTab("oth");
    }
    console.log(tab);
  };
  return (
    <section className="mx-auto flex max-w-7xl flex-wrap gap-8 px-11 pb-11">
      <div
        className="tabs inline-flex w-full justify-center px-1 pt-2"
        data-content="tab-content"
      >
        <button
          className="-mb-px rounded-t border-b-2 border-secondary px-4 py-2 font-semibold text-dark"
          onClick={() => {
            tabSwitch("dev");
          }}
        >
          Development
        </button>
        <button
          className="-mb-px rounded-t border-b-2 border-secondary px-4 py-2 font-semibold text-dark"
          onClick={() => {
            tabSwitch("des");
          }}
        >
          Design
        </button>
        <button
          className="-mb-px rounded-t border-b-2 border-secondary px-4 py-2 font-semibold text-dark"
          onClick={() => {
            tabSwitch("oth");
          }}
        >
          Other
        </button>
      </div>

      <div className="mx-auto max-w-[292px]">
        <div className={`${tab !== "dev" && "hidden"} `}>
          <h3 className=" pb-4 text-2xl text-neutral dark:text-text md:text-3xl lg:text-4xl">
            Development
          </h3>
          <ul>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Next.js</li>
          </ul>
          <ul>
            <li>Astro.js</li>
            <li>PHP</li>
            <li>Wordpress</li>
            <li>WooCommerce</li>
            <li>Shopify</li>
          </ul>
        </div>
        <div className={`${tab !== "des" && "hidden"}  `}>
          <h3 className="pb-4 text-2xl text-neutral dark:text-text md:text-3xl lg:text-4xl">
            Design
          </h3>
          <ul>
            <li>Sass</li>
            <li>TailwindCSS</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe InVision</li>
            <li>Adobe XD</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className={`${tab !== "oth" && "hidden"}`}>
          <h3 className="pb-4 text-2xl text-neutral dark:text-text md:text-3xl lg:text-4xl">
            Others
          </h3>
          <ul>
            <li>Github</li>
            <li>Vercel</li>
            <li>Kroll</li>
            <li>VSCode</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
