import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cgsteam,
  softserve,
  starwarsDB,
  donutHeaven,
  jsGame,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "SoftServe",
    icon: softserve,
    iconBg: "#E6DEDD",
    date: "February 2022 - January 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Working with interservice architecture on Back-end.",
      "Creating tests for created components.",
    ],
  },
  {
    title: "Main FullStack Developer",
    company_name: "CGS-team",
    icon: cgsteam,
    iconBg: "#383E56",
    date: "February 2023 - Present",
    points: [
      "Choosing the direction of movement of the technical side of the project.",
      "Communication and mutual assistance between each part of the team and the company as a whole.",
      "Rewriting the existing legacy code on the landing page, admin part and backend.",
      "Dissemination of own experience and code quality control within the team.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ruslan is an amazing team player! He's a wealth of knowledge and brings a fantastic attitude to everything he does.",
    name: "Daryna Kosukha",
    designation: "HR",
    company: "CGS-team",
    image:
      "https://media.licdn.com/dms/image/D4E03AQHf6_uuK4qz7Q/profile-displayphoto-shrink_400_400/0/1686151990660?e=1706745600&v=beta&t=F1FksF82PFmrSXo5BiT4xQXOh-83FFgpC_Pz1Ry-d4k",
  },
  {
    testimonial:
      "Ruslan has consistently demonstrated exceptional leadership in our development team and was treated as a team mentor among the developers.",
    name: "Mila Kozinets",
    designation: "PM",
    company: "CGS-team",
    image:
      "https://media.licdn.com/dms/image/D4E03AQG5vZpOjgvd6w/profile-displayphoto-shrink_800_800/0/1694461735315?e=1706745600&v=beta&t=1dx2VOIye-x1yguUvkA0SCxOfKNe3kpMAnAkcMFRKcQ",
  },
  {
    testimonial:
      "Ruslan's calm and composed demeanor is truly commendable. His ability to stay composed under pressure not only set a positive tone for the team but also ensured that solutions were reached efficiently.",
    name: "Andrii Radchenko",
    designation: "Developer",
    company: "CGS-team",
    image:
      "https://media.licdn.com/dms/image/D4E03AQHwG11tS36c7Q/profile-displayphoto-shrink_800_800/0/1671876838456?e=1706745600&v=beta&t=aoArA_NE5V6TikzXYW0WMQDKQERh0DAXAU0syZcAnBk",
  },
];

const projects = [
  {
    name: "Star Wars DB",
    description:
      "This project is a comprehensive database of the iconic Star Wars saga, cataloging characters, planets, and starships. It serves as an interactive encyclopedia for fans to explore the rich lore and details of the Star Wars universe",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: starwarsDB,
    source_code_link: "https://github.com/ElitKondor/StarWars-DB",
  },
  {
    name: "Donut Heaven",
    description: `The following project is a virtual voyage crafted using Three.js technology, inviting users to navigate a mesmerizing 3D space with their mouse. As shown in the screenshot, this immersive experience is aptly titled "Donut Heaven" where users can float amidst a whimsical cosmos of floating donut shapes, each rendered with a dynamic sense of depth and realism that only 3D graphics can provide.`,
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "webpack",
        color: "green-text-gradient",
      },
    ],
    image: donutHeaven,
    source_code_link: "https://github.com/ElitKondor/Donut-Heaven-Three.js",
  },
  {
    name: "The great color game",
    description:
      "Dive into a world of hues with our RGB Color Challenge, where your eye for color is put to the test! Can you match the squares to their correct RGB codes? Choose wisely—each mistake fades a square, narrowing down your options until you conquer the spectrum!",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
    ],
    image: jsGame,
    source_code_link: "https://github.com/ElitKondor/js-game",
  },
];

export { services, technologies, experiences, testimonials, projects };
