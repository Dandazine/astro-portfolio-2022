---
    featured: false
    blog: false
    title: Portfolio
    slug: portfolio
    thumbnail:
    excerpt: 
        This portfolio was developed to be a responsive and accessible website following a mobile-first approach in design. Displays all recent projects, and all blog posts. It also has a functional light-dark theme switch.
    author: Danial Daneshfar
    date: 2022-09
    tools: 
        AstroJS, ReactJS, TypeScript, TailwindCSS, Adobe XD, Github, Vercel
    role: Developer
    challenge: 
        The challenge of this project was displaying and filtering all projects and displaying them onto one dynamic page as opposed to making a separate page for each project.
    solution:
        The solution for this was made very simple thanks to astro's way of exporting and importing .md/.mdx files. After importing all the information from the .md files, I was able to filter out specific projects or blog posts using the markdown's front matter tags.
    live: 
    git:
---

## Summary

I made a portfolio with the intention of displaying all my most recent projects, blog posts, and to advertise my freelancing Web Development services, Dandazine. This portfolio project was not only a great practice with React, but also a fantastic introduction to Astro.js Markdown and Tailwind CSS. The portfolio features a light and dark theme, responsive sizing for header based on viewport, dynamic pages, and SEO optimization.

Styling is all handled by tailwind CSS, and all the icons have been acquired from their respective documentation.

## Development

Astro + React was my go-to when choosing a tech-stack. Astro is perfect for static, or mostly static sites such as portfolios, and is able to integrate other JavaScript frameworks such as React or Vue. I decided to use Astro and React for two reasons:

1. Strengthen my foundation with React.

2. Keep my website fast and SEO friendly.

The highlight of this project was being able to map through, and write up all my projects in .md files. I had a lot of fun learning the syntax and the application of .md files. Compared to previous tech stacks I've used such as NextJS, Astro has a very easy way to display an archive of projects or blog posts, and sending their individual information to a dynamic page when the project is selected.

![Test Image to test out markdown images](/test.png "test")

After getting the archive, you can then create a dynamic page which then imports the information sent to it from your archives.

![Test Image to test out markdown images](/test.png "test")

## Styling

Styling with Tailwind CSS was a little confusing in the beginning, but after a little bit of practice, it became very effecient and I understood why a lot of developers enjoy using it. For the sake of practice, I tried avoiding global styles in this project, and only used it when it was unavoidable, such as font-family.
