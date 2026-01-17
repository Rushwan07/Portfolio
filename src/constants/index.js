import project2 from "../assets/projects/project-2.jpg";
import Workoutimg from "../assets/projects/workout-app.webp";
import ProsizeByRushi from "../assets/projects/ProsizeByRushi.png"
import ChitChat from "../assets/projects/ChitChat.png"
import Moneyimg from "../assets/projects/Money-app.jpg"

export const HERO_CONTENT = `
I'm a software developer skilled in C, C++, Python, Django, React, and Java, with a strong interest in web development and database management using SQL. I enjoy solving complex problems and building efficient, scalable solutions. I'm motivated to collaborate on innovative projects that make a real impact.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025",
    role: "Fullstack Developer",
    company: "AbleLYF.",
    description: `Designed and developed user interfaces for web applications using MERN Stack. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React.js", "Express.js", "Mongodb", "Node.js"],
  },
  {
    year: "2023 - 2024",
    role: "Web Developer",
    company: "BAOIAM INNOVATION PVT.",
    description: `Contributed to building a complete course and student management
    system using Django Rest Framework.
    Implemented social authentication features to enhance user experience.`,
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Django"],
  }
];

export const PROJECTS = [
  {
    title: "Chit Chat - A Real time Messaging Application",
    link: "https://real-time-chatting-app-eta.vercel.app/",
    image: ChitChat,
    description:
      "Created a real time messaging application using MERN stack and Socket.IO that utlizes web sockets in the backend. It supports individual chat functionalities along with full user authentication and profile management. It has real time typing indicators to show when a user is typing",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Socket.IO"],
  },
  {
    title: "ProsizeByRushi",
    link: "https://github.com/Rushwan07/ProsizeByRushi",
    image: ProsizeByRushi,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "Read Success Stories",
    link: "https://github.com/Rushwan07/ReadSuccessStories",
    image: project2,
    description:
      "This is a basic django poject where you can read the success stories of the most successful peoples",
    technologies: ["HTML", "CSS", "Python", "Django"],
  },
  {
    title: "Gym-Shym",
    link: "https://github.com/Rushwan07/Gym-Shym",
    image: Workoutimg,
    description:
      "The MERN Workout Tracker streamlines fitness tracking with easy logging, customization, and secure access—your ultimate fitness companion.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "Easy-Pay",
    link: "https://github.com/Rushwan07/Easy-Pay",
    image: Moneyimg,
    description:
      "This online money transfer website enables secure and seamless transactions, making sending and receiving money effortless.",
    technologies: ["HTML", "CSS", "Python", "Django"],
  },
];

export const CONTACT = {
  address: "Chopda, Jalgaon Maharashtra",
  phoneNo: "+91 7498525542 ",
  email: "rushdeveloper07@gmail.com",
  Key: "c805f8c1-0ebd-4300-a440-9ecd6942e7d4"
};
