// import { Skill, Project, Experience, Social } from './types';

import type { Experience, Project, Skill, Social } from "./types";
import projectOneImg from "./assets/project1.png";
import projectTwoImg from "./assets/project2.png";
import projectThreeImg from "./assets/project3.png";

export const SKILLS: Skill[] = [
  { name: "React", icon: "Code2", category: "Frontend" },
  { name: "JavaScript", icon: "FileJson", category: "Frontend" },
  { name: "TypeScript", icon: "FileJson", category: "Frontend" },
  { name: "Tailwind CSS", icon: "Palette", category: "Frontend" },
  { name: "Next.js", icon: "Globe", category: "Frontend" },
  { name: "Framer Motion", icon: "Zap", category: "Frontend" },
  { name: "Redux", icon: "Layers", category: "Frontend" },
  { name: "Node.js", icon: "Server", category: "Backend" },
  { name: "Express", icon: "Terminal", category: "Backend" },
  { name: "MongoDB", icon: "Database", category: "Backend" },
  { name: "Git", icon: "GitBranch", category: "Tools" },
  { name: "AWS", icon: "Box", category: "Tools" },
  { name: "Figma", icon: "Figma", category: "Design" },
];

export const PROJECTS: Project[] = [
  {
    title: "Auto Detailing Website",
    description:
      "A SPA that serves a business based in canada to show their work and presence on web, also handling queries.",
    image: projectOneImg,
    tags: ["React", "Javascript", "Framer-Motion", "Tailwind"],
    link: "https://www.noirautospa.ca/",
    github: "#",
  },
  {
    title: "Accounting Firm Website",
    description:
      "A comprehensive website for an accounting firm in canada who wants to show their presence on the web and providing services to the clients.",
    image: projectTwoImg,
    tags: ["React", "Javascript", "TypeScript", "Node.js", "Framer-Motion", "Web3forms"],
    link: "https://prairietaxes.com/",
    github: "#",
  },
  {
    title: "Booking Tracker Dashboard",
    description: `Developed comprehensive booking management dashboard aggregating data from multiple sources (MakeMyTrip, Goibibo,
MyBus, Personal) with export to CSV functionality`,
    image: projectThreeImg,
    tags: ["React", "Javascript", "Framer Motion", "TailwindCSS"],
    link: "https://bus-booking-tracker-psi.vercel.app/",
    github: "#",
  },
];

export const EXPERIENCES: Experience[] = [
  // {
  //   company: "Freelancer",
  //   position: "Frontend Developer",
  //   duration: "2026 - Present",
  //   description: [
  //     "Led the migration of a legacy codebase to React and TypeScript, improving performance by 40%.",
  //     "Developed and maintained a custom UI component library used across multiple internal projects.",
  //     "Mentored junior developers and conducted regular code reviews to ensure high-quality standards.",
  //   ],
  // },
  {
    company: "Amerging Technologies",
    position: "Software Developer",
    duration: "2023 - Present",
    description: [
      "Built responsive and interactive user interfaces for various client projects using React and Tailwind CSS.",
      "Proficient in building dynamic, scalable web applications using React.js with a strong focus on component-based architecture, state management, and API integration. Experienced in deploying React apps and API testing.",
      "Well-versed in a variety of tools and technologies, including Redux, React Router, Axios, Tailwind CSS, MUI, ShadCN, and Bootstrap. Demonstrated expertise in state management, responsive UI/UX design, and implementing best practices for modern web development.",
      "Experienced in working with AWS for cloud integration and API-driven development to enhance application functionality and scalability.",
    ],
  },
];

export const SOCIALS: Social[] = [
  {
    platform: "GitHub",
    url: "https://github.com/keshavmittal4",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/keshavmittaldev",
    icon: "Linkedin",
  },
  { platform: "Twitter", url: "https://twitter.com", icon: "Twitter" },
];

export const WHATSAPP_NUMBER = "9588732843"; // Replace with actual number
export const RESUME_URL = "/resume.pdf"; // Placeholder
