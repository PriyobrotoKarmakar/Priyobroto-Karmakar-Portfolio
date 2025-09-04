import {
  mobile,
  backend,
  creator,
  web,
  nextalk,
  codeanalyzer,
  contentpilot,

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
  chatgptAIEssentials,
  masterGenerativeAI,
  buildGenerativeAI,
  competitiveProgramming,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Competitive Programmer",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
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
  // New certificates
  {
    title: "ChatGPT Made Easy: AI Essentials for Beginners",
    organization: "Udemy",
    date: "Aug 2025",
    image: chatgptAIEssentials,
    link: chatgptAIEssentials,
  },
  {
    title: "Master Generative AI and Generative AI Tools",
    organization: "Udemy",
    date: "Aug 2025",
    image: masterGenerativeAI,
    link: masterGenerativeAI,
  },
  {
    title: "Build Generative AI Apps and Solutions with No-Code Tools",
    organization: "Udemy",
    date: "Aug 2025",
    image: buildGenerativeAI,
    link: buildGenerativeAI,
  },
  {
    title: "Competitive Programming",
    organization: "Summer Training",
    date: "July 2025",
    image: competitiveProgramming,
    link: competitiveProgramming,
  },
];

const projects = [
  {
    name: "NexTalk",
    description:
      "Full-stack real-time chat platform supporting 1,000+ concurrent users with instant messaging, AI-powered text enhancer, and low-latency video calls. Features JWT authentication, responsive design, and customizable themes for seamless cross-device communication.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
      { name: "DaisyUI", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
      { name: "Socket.io", color: "green-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" },
      { name: "bcryptjs", color: "blue-text-gradient" },
      { name: "Cloudinary", color: "green-text-gradient" },
      { name: "Zod", color: "pink-text-gradient" },
    ],
    image: nextalk, 
    deployed_link: "https://nextalk-chat.vercel.app",
    source_code_link: "https://github.com/",
  },
  {
    name: "Code Analyzer",
    description:
      "AI-powered debugging and code analysis tool that improves developer productivity with automated fix suggestions, integrated code generation, and interactive time/space complexity visualizations. Built with Vite, React, and Google Gemini AI.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Vite", color: "green-text-gradient" },
      { name: "Google Gemini AI", color: "pink-text-gradient" },
      { name: "Formspree", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "HTML", color: "blue-text-gradient" },
      { name: "Vercel", color: "green-text-gradient" },
    ],
    image: codeanalyzer,
    deployed_link: "https://code-analyser-rho.vercel.app/",
    source_code_link: "https://github.com/",
  },
  {
    name: "ContentPilot",
    description:
      "AI-powered social media content assistant that generates viral posts, hashtags, and thumbnails. Uses Google Generative AI to create 30+ optimized LinkedIn-ready posts and integrates AI-driven thumbnail generation with responsive video backgrounds.",
    tags: [
      { name: "Flask", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Google Generative AI", color: "pink-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "JQuery", color: "blue-text-gradient" },
      { name: "Marked.js", color: "green-text-gradient" },
      { name: "Render", color: "pink-text-gradient" },
    ],
    image: contentpilot,
    deployed_link: "https://content-pilot.onrender.com/",
    source_code_link: "https://github.com/",
  },
];


export { services, projects, certificates };
