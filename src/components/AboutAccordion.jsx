import React from "react";
import { useState } from "react";

const AboutAccordion = () => {
  const [active, setActive] = useState(null);
  const toggleSection = (i) => {
    if (active === i) {
      return setActive(null);
    }
    setActive(i);
  };
  return (
    <section className="pb-6">
      {aboutData.map((sct, i) => (
        <div key={i} className="my-3 w-full bg-neutral p-3">
          <div
            className="flex cursor-pointer justify-between"
            onClick={() => {
              toggleSection(i);
            }}
          >
            <h2 className="text-secondary">
              <span className="text-info">Q.{i + 1}</span> {sct.title}
            </h2>
            <span className="text-info">{active === i ? "-" : "+"}</span>
          </div>
          <div className={active === i ? "block" : "hidden"}>
            <p className="text-text">{sct.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

const aboutData = [
  {
    title: "What are my origins",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit voluptatum consequuntur excepturi quaerat accusamus ad dolore officiis itaque distinctio fugiat laudantium modi non corporis ullam, vero impedit! Doloremque, magni nihil?",
  },
  {
    title: "What are the tools I like to use",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit voluptatum consequuntur excepturi quaerat accusamus ad dolore officiis itaque distinctio fugiat laudantium modi non corporis ullam, vero impedit! Doloremque, magni nihil?",
  },
  {
    title: "What are my other interests?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit voluptatum consequuntur excepturi quaerat accusamus ad dolore officiis itaque distinctio fugiat laudantium modi non corporis ullam, vero impedit! Doloremque, magni nihil?",
  },
];

export default AboutAccordion;
