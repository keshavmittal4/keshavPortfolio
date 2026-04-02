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
    title: "Accounting Agency Website",
    description:
      "A comprehensive dashboard for managing products, orders, and customers with real-time analytics.",
    image: projectTwoImg,
    tags: ["React", "Javascript", "TypeScript", "Node.js", "Framer-Motion", "Web3forms"],
    link: "https://prairietaxes.com/",
    github: "#",
  },
  {
    title: "Social Media App",
    description: `Developed comprehensive booking management dashboard aggregating data from multiple sources (MakeMyTrip, Goibibo,
MyBus, Personal) with CSV export functionality using npm CSVLink`,
    image: projectThreeImg,
    tags: ["React", "Firebase", "Framer Motion", "Tailwind"],
    link: "https://bus-booking-tracker-psi.vercel.app/",
    github: "#",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Freelancer",
    position: "Frontend Developer",
    duration: "2026 - Present",
    description: [
      "Led the migration of a legacy codebase to React and TypeScript, improving performance by 40%.",
      "Developed and maintained a custom UI component library used across multiple internal projects.",
      "Mentored junior developers and conducted regular code reviews to ensure high-quality standards.",
    ],
  },
  {
    company: "Amerging Technologies",
    position: "Software Developer",
    duration: "2023 - 2026",
    description: [
      "Built responsive and interactive user interfaces for various client projects using React and Tailwind CSS.",
      "Collaborated with designers to implement pixel-perfect designs and smooth animations.",
      "Optimized web applications for maximum speed and scalability.",
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
