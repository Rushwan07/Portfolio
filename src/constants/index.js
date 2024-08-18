import project2 from "../assets/projects/project-2.jpg";
import Workoutimg from "../assets/projects/workout-app.webp";
import ProsizeByRushi from "../assets/projects/ProsizeByRushi.png"
import Moneyimg from "../assets/projects/Money-app.jpg"

export const HERO_CONTENT = `Aspiring software developer proficient in C, C++, Python, Django, React, and Java,
with a keen aptitude for web development technologies and database management
using SQL. Eager to apply theoretical knowledge to real-world projects and expand
skill set through hands-on experience. Seeking an internship opportunity to learn,
contribute, and grow in a dynamic tech environment.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
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
    title: "ProsizeByRushi",
    link: "https://github.com/Rushwan07/ProsizeByRushi",
    image: ProsizeByRushi,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
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
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
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
  email: "rushdeveloper@07gmail.com",
};
