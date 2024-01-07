import {
  mobile,
  backend,
  creator,
  web,
  skillacademia,
  meliodus,
  sharebuzz,
  blog,
  caratcents,
  truos,
  healthian,
  inditours,
  traveller,
  nike,
  port,
  blogify,
  asylum,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend React.js Next.js",
    icon: web,
  },
  {
    title: "MERN Stack",
    icon: mobile,
  },
  {
    title: "UI/UX Figma",
    icon: creator,
  },
  {
    title: "React Native (Learning)",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "./tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "./tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "./tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "./tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "./tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "./tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "./tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "./tech/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "./tech/mongodb.png",
  },
  {
    name: "Three JS",
    icon: "./tech/threejs.svg",
  },
  {
    name: "git",
    icon: "./tech/git.png",
  },
  {
    name: "figma",
    icon: "./tech/figma.png",
  },
];

const experiences = [
  {
    title: "Chief Development Officer",
    company_name: "Skill Academia",
    icon: skillacademia,
    iconBg: "#383E56",
    date: "June 2021 - September 2022",
    points: [
      "Developing and maintaining web applications using React.js and Next.js.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Social media management",
      "Team recruitment",
    ],
  },
  {
    title: "Skipper/Teacher",
    company_name: "Skill Academia",
    icon: skillacademia,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - current",
    points: [
      "Taught Html, Css and Javascript in Skill Academia's online platform, revolutionizing the way students acquire these essential coding skills",
      "Taught over 250 students",
      "Here are my course contents in Skill Academia's  online for Website Development. Link https://www.skillacademia.com/course/web-development",
      "Here are my course contents in Skill Academia's online for Website Designing. Link https://www.skillacademia.com/course/web-designing",
    ],
  },
  {
    title: "React/Next js Developer",
    company_name: "Meliodus Workplace",
    icon: meliodus,
    iconBg: "#111",
    date: "June 2022 - August 2022 (3 months contractual)",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Asylum",
    description:
      "Asylum is a robust real estate platform developed using the MERN stack. Seamlessly search and explore properties with a user-friendly interface.",
    type: "a MERN stack real estate website",
    tags: [
      {
        name: "react-js",
      },
      {
        name: "MERN-stack",
      },
      {
        name: "mongodb",
      },
      {
        name: "mongoose",
      },
    ],
    image: asylum,
    sourceCode: "https://github.com/RoyGitt/asylum",
    link: "https://asylum-estate.onrender.com/",
  },
  {
    name: "Blogify",
    description:
      "Blogify is a weblog built with Next 14 and Next Auth v5, server actions.Route protection using Next Auth.",
    type: "a fullstack blog website",
    tags: [
      {
        name: "next-14",
      },
      {
        name: "next-auth-v5",
      },
      {
        name: "mongodb",
      },
      {
        name: "mongoose",
      },
    ],
    image: blogify,
    sourceCode: "https://github.com/RoyGitt/blogify",
    link: "https://blogify-lao6.vercel.app/",
  },
  {
    name: "Share Buzz",
    type: "a social media webapp",
    description:
      "A social media website centered around image sharing. It is inspired from many popular social media websites.",
    tags: [
      {
        name: "react.js",
      },
      {
        name: "sanity.io",
      },
      {
        name: "tailwind CSS",
      },
    ],
    image: sharebuzz,
    sourceCode: "https://github.com/RoyGitt/sharebuzz",
    link: "https://sharebuzz.netlify.app",
  },

  {
    name: "Portfolio",
    type: "a fancy portfolio",
    description:
      "Passionate creator showcasing diverse projects, merging innovation with creativity. Explore my portfolio for a visual journey into my work.",
    tags: [
      {
        name: "react.js",
      },
      {
        name: "framer-motion",
      },
      {
        name: "tailwind CSS",
      },
      {
        name: "react-three-fibre",
      },
    ],
    image: port,
    sourceCode: "https://github.com/RoyGitt/portfolio",
    link: "https://royaran.netlify.app/",
  },
  {
    name: "Nike",
    type: "a cool landing page",
    description:
      "Dynamic Nike landing page, blending innovation and style. Captivating visuals, seamless navigation. Elevate your experience, step into excellence.",
    tags: [
      {
        name: "react.js",
      },
      {
        name: "framer-motion",
      },
      {
        name: "tailwind CSS",
      },
    ],
    image: nike,
    sourceCode: "https://github.com/RoyGitt/nike-tailwind",
    link: "https://polite-macaron-79f9f6.netlify.app/",
  },
  {
    name: "BlogR",
    type: "a blog webapp",
    description:
      "Discover the power of JavaScript and Next.js with my practical blogs, unlocking endless possibilities for web development",
    tags: [
      {
        name: "next.js",
      },
      {
        name: "react-markdown",
      },
      {
        name: "rest-api",
      },
    ],
    image: blog,
    sourceCode: "https://github.com/RoyGitt/blog-app",
    link: "https://statuesque-licorice-c23cb0.netlify.app/",
  },
  {
    name: "Carat & Cents",
    description:
      "Indulge in elegance and grace of our website showcasing exquisite jewelry that captures the essence of luxury.",
    type: "a frontend website for jewelers",
    tags: [
      {
        name: "html",
      },
      {
        name: "css",
      },
      {
        name: "javascript",
      },
    ],
    image: caratcents,
    link: "https://spectacular-bienenstitch-247722.netlify.app/",
  },
  {
    name: "Tru OS",
    description:
      "Explore the cutting-edge world of tech products through our sleek and intuitive frontend website, delivering innovation at your fingertips.",
    type: "a frontend website for tech products.",
    tags: [
      {
        name: "html",
      },
      {
        name: "css",
      },
      {
        name: "javascript",
      },
    ],
    image: truos,
    link: "https://regal-licorice-6c492e.netlify.app/",
  },

  {
    name: "Inditours",
    description:
      "Engaging and user-friendly travel agency website offering seamless navigation, stunning visuals, personalized itineraries, and secure online booking services.",
    type: "a frontend website for travel agencies.",
    tags: [
      {
        name: "html",
      },
      {
        name: "scss",
      },
      {
        name: "javascript",
      },
    ],
    image: inditours,
    sourceCode: "https://github.com/RoyGitt/Inditours",
    link: "https://silly-biscuit-0bfef6.netlify.app",
  },
];

export { services, technologies, experiences, projects };
