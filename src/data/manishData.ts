// src/data/manishData.ts
export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
}

export interface Experience {
  id: number;
  period: string;
  role: string;
  company: string;
  achievements: string[];
}

export const personalInfo = {
  name: "Manish Jamarkattel",
  title: "Full-Stack Developer",
  location: "Kathmandu, Nepal",
  email: "jamarkattelmanish2@gmail.com",
  phone: "9866121290",
  github: "github.com/manishjk08",
  bio: "Computer Science graduate (BSc CSIT) with practical experience in building responsive web applications using React.js and hands-on development in Node.js and Express.js. Proficient in PostgreSQL and familiar with REST API development, Git-based workflows, and Agile practices. Eager to contribute to software development and application support roles, with a strong interest in financial and banking systems.",
  additionalInfo: "Currently expanding backend skills with Node.js, Express.js, and REST API development with JWT authentication. Familiar with system architecture concepts including client-server model, RESTful design, and database normalization. Interest in banking and financial technology systems."
};

export const skillCategories: SkillCategory[] = [
  { name: "Languages", skills: ["JavaScript", "TypeScript"] },
  { name: "Frontend", skills: ["React.js", "Redux Toolkit", "Context API", "React Router", "HTML5", "CSS3", "Tailwind CSS"] },
  { name: "Backend & APIs", skills: ["Node.js", "Express.js", "REST API", "JWT Authentication"] },
  { name: "Databases", skills: ["PostgreSQL"] },
  { name: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "MS Office"] },
  { name: "Concepts", skills: ["REST APIs", "MVC Pattern", "Agile"] }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Canteen Management System",
    description: "Built a full-stack canteen management application with an admin dashboard supporting full CRUD operations on menu items. Implemented an employee voting system allowing staff to influence menu decisions, improving engagement. Designed a user-friendly interface for browsing menus, viewing popular items, and tracking vote counts in real time.",
    tags: ["React", 'typescript'],
    github: "https://github.com/manishjk08/canteen-management-system"
  },
  {
    id: 2,
    title: "Bank Management System",
    description: "Built a full-stack bank management application with JWT authentication, role-based access control, and real-time fund transfers with database transaction rollback. Built atomic database transactions in PostgreSQL with rollback on failure to ensure data integrity during fund transfers preventing partial updates and race conditions. Designed a user-friendly interface for fund deposit, transfer, transaction and use area chart and pie chart to show history.",
    tags: ["React", "Node.js", "PostgreSQL", "JWT", "Express"],
    github: "https://github.com/manishjk08/Bank-Management-system"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    period: "Feb 2025 — May 2025",
    role: "React.js Intern",
    company: "Trilokya Technology, Kathmandu, Nepal",
    achievements: [
      "Developed and maintained responsive web applications using React.js, JavaScript, HTML5, and CSS3, ensuring cross-browser compatibility and mobile responsiveness",
      "Built and maintained reusable component libraries using React.js, reducing development time across multiple features",
      "Implemented React Router v6 for seamless client-side navigation across multi-page applications",
      "Managed application-wide state using Redux Toolkit and Context API following best practices for scalable state management",
      "Worked within an Agile team environment using Git for version control, participating in code reviews and sprint planning"
    ]
  }
];

export const education = {
  degree: "BSc CSIT — Bachelor of Science in Computer Science & IT",
  institution: "Tribhuvan University | Hetauda City College",
  plusTwo: "+2 Science, Hetauda School of Management"
};