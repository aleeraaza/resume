import fastpizza from "../assets/fastpizza.png";
import itchyfeet from "../assets/itchyfeet.png";
import popcorn from "../assets/popcorn.png";
import splitbill from "../assets/splitbill.png";
import worldwise from "../assets/worldwise.png";
import atomicblog from "../assets/atomicblog.png";
import travellist from "../assets/travellist.png";
import resume from "../assets/resume.png";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiNextjsLine,
  RiDatabase2Line,
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiRouterLine,
  RiServerLine,
  RiSearch2Line,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Ali Raza",
  role: "Full Stack Developer",
  subheading:
    "Full stack web developer with expertise in frontend and backend development, proficient in building dynamic and responsive web applications using modern frameworks and tools.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Search Atlas - Seo Platform.",
    description:
      "SearchAtlas.com is an AI-powered SEO platform designed for agencies, businesses, and individuals to automate and manage SEO tasks. It offers tools for site audits, content optimization, keyword research, backlink analysis, and AI-driven content creation.",
    techStack: ["Next js", "React-Router", "Tailwind Css"],
    imgSrc: searchatlas,
    link: "https://searchatlas.com/",
  },
  {
    id: 2,
    title: "Multi Radiance Medical.",
    description:
      "MultiRadiance.com is the official website of Multi Radiance Medical, a company specializing in FDA-cleared laser therapy devices.",
    techStack: ["React", "React-Router", "Tailwind Css", "MUI"],
    imgSrc: mrm,
    link: "https://www.multiradiance.com/",
  },{
    id: 3,
    title: "Fast Pizza Co.",
    description:
      "Fast React Pizza is a React application where users can browse through a list of pizzas, add them to their cart, and place an order.",
    techStack: ["React", "React-Router", "Tailwind Css"],
    imgSrc: fastpizza,
    link: "https://fast-pizza-co-coral.vercel.app/",
  },
  {
    id: 4,
    title: "ItchyFeet (MERN App)",
    description:
      "Wait! It'll take some time to load as it is Deployed on Render for free.Its a clone project of popular Place Listing(like rooms, appartments, buildings, etc) website called Airbnb . It tech stack is MongoDB, Experss, ejs, Node.js, BootStrap and many more technologies.",
    techStack: [
      "MongoDB",
      "Express",
      "BootStrap",
      "ejs",
      "javascript",
      "Cloudinary",
    ],
    imgSrc: itchyfeet,
    link: "https://itchyfeet-acei.onrender.com/listings",
  },
  {
    id: 5,
    title: "Popcorn & Movies",
    description:
      "Popcorn is a React application that allows users to search for movies, rate them, and manage a watchlist. The app fetches movie data from the IMDb API, providing an easy way for users to discover and keep track of their favorite films.",
    techStack: ["React", "IMDb API", "javaScript", "CSS"],
    imgSrc: popcorn,
    link: "https://popcorn-and-movies-aliraza.vercel.app/",
  },
  {
    id: 6,
    title: "Split-the-Bill",
    description:
      "Split-the-Bill is a simple React application designed to help you split bills with friends. Whether you’re dining out or sharing expenses.",
    techStack: ["React", "javaScript", "CSS"],
    imgSrc: splitbill,
    link: "https://split-the-bill-aliraza.vercel.app/",
  },
  {
    id: 7,
    title: "World-Wise",
    description:
      "WorldWise is a travel app. This app helps users keep track of the places they've visited and plan their future trips.",
    techStack: ["React", "Single-paging", "Context API"],
    imgSrc: worldwise,
    link: "https://world-wise-aliraza.vercel.app/",
  },
  {
    id: 8,
    title: "Atomic-Blog",
    description: "Atomic Blog is a simple blogging platform built using React.",
    techStack: ["React"],
    imgSrc: atomicblog,
    link: "https://atomic-blog-aliraza.vercel.app/",
  },
  {
    id: 9,
    title: "Travel-Check-List",
    description:
      "Travel checklist is a React application designed to help users prepare a list of items they need to carry with them.",
    techStack: ["React"],
    imgSrc: travellist,
    link: "https://travel-checklist-aliraza.vercel.app/",
  },
  {
    id: 10,
    title: "My Resume",
    description:
      "A sleek and responsive portfolio website built with React, Tailwind CSS and GSAP for animations on this site",
    techStack: ["React", "tailwind css", "GSAP"],
    imgSrc: resume,
    // link: "https://example-learningplatform.com",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "React Router",
    icon: <RiRouterLine className="text-orange-700" />,
  },
  {
    name: "React Query",
    icon: <RiSearch2Line className="text-orange-400" />,
  },
  {
    name: "Express",
    icon: <RiServerLine className="text-stone-300" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "Next Js",
    icon: <RiNextjsLine className="text-pink-400" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "mySql",
    icon: <RiDatabase2Line className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2023 - Present",
    role: "Learning MERN Stack",
    company: "ItchyFeet-The Airbnb Clone site",
    description:
      "I have learned this Stack through making this website, which is a airbnb type clone where the users can list their homes, appartments, hotel rooms and many more unique place.Through this site i have learned the below Technologies:",
    techStack: ["Javascript", "React.js", "Node.js", "MongoDB", "Express"],
  },
  {
    yearRange: "2023 - 2024",
    role: "Learnign React in Depth",
    company: "From Udemy",
    description:
      "In that one year i have learned the below technologies in depth from Udemy by Jonas Schmedtmann",
    techStack: [
      "React",
      "Hooks",
      "Context API",
      "React Query",
      "React Router",
      "supabase",
    ],
  },
  {
    yearRange: "2024",
    role: "Learning Node.js",
    company: "Jonas Schmedtmann",
    description: "Learning the Node.js and gaining an indepth knowledge in it",
    techStack: ["Node.js", "MongoDB", "Mongoose", "Error Handling"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science with Grade [3.62/4]",
    institution: "The Islamia University of Bahawalpur",
    duration: "2021 - 2025 ",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development. Completed a MERN Stack project for the Final Year Project by taking inspiration from Airbnb Website.",
  },
  {
    id: 2,
    degree: "The Ultimate React Course",
    institution: "Udemy -Jonas Schmedtmann",
    duration: "2024",
    description:
      "In this course I mastered modern React from beginner to advanced! Next.js, Context API, React Query, Redux, Tailwind, advanced patterns.",
  },
  {
    id: 3,
    degree: "Delta -Full Stack Web Development (MERN Stack)",
    institution: "Apna College",
    duration: "2023",
    description:
      "Completed the online course in Full Stack Web Development (MERN Stack) from Apna College(an Indian online learning platform).",
  },
  {
    id: 4,
    degree: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    institution: "Udemy -Jonas Schmedtmann",
    duration: "2024",
    description:
      "Mastered Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)",
  },
];

export const TESTIMONIAL = {
  name: "Sarah Doe(Dummy Name)",
  title: "CEO, TechCorp",
  quote:
    "This is a Dummy Testimonial as i am yet to work in a professional environment such as Internship or other jobs in Tech.",
  image: personImage,
};
