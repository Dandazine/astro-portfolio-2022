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
        <div
          key={i}
          className="my-3 w-full cursor-pointer bg-neutral p-3 "
          onClick={() => {
            toggleSection(i);
          }}
        >
          <div className="flex justify-between">
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
      "I originally come from a more medical side rather than a computer science background. While I was in highschool I thought about going into pharmacy, and I even got a job as a pharmacy technician, but then I changed my mind and went into Kinesiology during university instead. Yet, neither of those felt particularly fulfilling. While I have a lot of respect and admiration for those who are in those fields, it felt as if I was running head-first into careers that were not meant for me. One day, as I was working as a pharmacy technician, the pharmacy manager at the time suggested that I go into computer science. At first I was hesitant... \"I'm neither good at math nor do I have any coding experience\" I thought. Still, I considered it, and I jumped right in when I heard of BCIT's front end web development program in 2022. In this intensive 6 month program, I learned all the best practices for front end languages like HTML, CSS, Javascript, and Javascript frameworks. We also explored PHP, MySQL, and CMS like WordPress. Suddenly, I went from no experience to making websites from scratch using all sorts of tech tools and languages. Now, I make websites and web applications not only for myself, but for friends and family too. I have none of the concerns I had for Kinesiology nor Pharmacy, and every day I get to learn something new which is both fulfilling and uplifting. ",
  },
  {
    title: "What are the tools/languages I like to use",
    content:
      "I'm always willing to learn and use every tool and language I can, but my favourite thing to work with as of this moment is Astro. With Astro I can integrate any common JavaScript framework in order to make a super fast static website. Of course I also love using React, Tailwind CSS, and I've started learning TypeScript as well. For design I like using Adobe XD over other wireframing/prototyping tools, but I also have used Figma for a lot of projects as well. For image modification and optimization I tend to use Photoshop and Illustrator.",
  },
  {
    title: "What are my other interests?",
    content:
      "My other interests include cooking mostly. I find the task very relaxing and I love trying out new cuisine. Outside of coding and cooking, I also enjoy staying active and learning about other cultures and their languages. One day, I'd like to be able to travel worldwide to experience other countries' cuisine and cultures.",
  },
];

export default AboutAccordion;
