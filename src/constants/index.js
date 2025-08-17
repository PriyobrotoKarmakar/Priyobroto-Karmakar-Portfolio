import {
  mobile,
  backend,
  creator,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  // Certificate imports
  computerNetworking,
  tcpIP,
  researchPaper,
  peerToPeer,
  packetSwitching,
  hardwareOS,
  ielts,
  networkCommunication,
  digitalSystems,
  algorithms,
  cProgramming,
  cProgrammingLanguage,
  computerCommunications,
  openSourceContribution,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Certificate images for your portfolio
const certificates = [
  {
    title: "The Bits and Bytes of Computer Networking",
    organization: "Coursera",
    date: "Sept 2024",
    image: computerNetworking, // Now JPG format
    link: computerNetworking,
  },
  {
    title: "Research Paper Acceptance Certificate",
    organization: "IJSREM",
    date: "Nov 2024",
    image: researchPaper,
    link: researchPaper,
  },
  {
    title: "IELTS Pro Reading, Writing, Listening, Speaking",
    organization: "Udemy",
    date: "Nov 2024",
    image: ielts,
    link: ielts,
  },
  {
    title: "Fundamentals of Network Communication",
    organization: "Coursera",
    date: "Sept 2024",
    image: networkCommunication,
    link: networkCommunication,
  },
  {
    title: "Digital Systems: From Logic Gates to Processors",
    organization: "Coursera",
    date: "Sept 2024",
    image: digitalSystems,
    link: digitalSystems,
  },
  {
    title: "C Programming",
    organization: "MindLuster",
    date: "Jan 2024",
    image: cProgramming,
    link: cProgramming,
  },
  {
    title: "TCP/IP and Advanced Topics",
    organization: "Coursera",
    date: "Nov 2024",
    image: tcpIP, // Now JPG format
    link: tcpIP,
  },
  {
    title: "Peer to Peer Protocols and Local Area Networks",
    organization: "Coursera",
    date: "Oct 2024",
    image: peerToPeer, // Now JPG format
    link: peerToPeer,
  },
  {
    title: "Packet Switching Networks and Algorithms",
    organization: "Coursera", 
    date: "Nov 2024",
    image: packetSwitching, // Now JPG format
    link: packetSwitching,
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    organization: "Coursera",
    date: "Sept 2024",
    image: hardwareOS, // Now JPG format
    link: hardwareOS,
  },
  {
    title: "Design and Analysis of Algorithms",
    organization: "NPTEL",
    date: "April 2025",
    image: algorithms, // Now JPG format
    link: algorithms,
  },
  {
    title: "C Programming Language",
    organization: "CipherSchool",
    date: "May 2024",
    image: cProgrammingLanguage, // Now JPG format
    link: cProgrammingLanguage,
  },
  {
    title: "Computer Communications",
    organization: "Coursera",
    date: "Nov 2024",
    image: computerCommunications, // Now JPG format
    link: computerCommunications,
  },
  {
    title: "Open Source Contributors Drive",
    organization: "Github Student Club",
    date: "Sept 2024",
    image: openSourceContribution, // Now JPG format
    link: openSourceContribution,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, certificates };
