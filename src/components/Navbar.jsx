import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import P from "../assets/P.png";

const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex justify-between items-center py-6">
        <div className="">
          <img className="w-[10vh] " src={P} alt="Profile" />
        </div>
        <div className=" flex justify-center items-center text-2xl gap-4">
          <a href="https://www.linkedin.com/in/sayed-rushwan/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Rushwan07">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/rushwan_07/">
            <FaInstagram />
          </a>
          <a href="https://x.com/RushwanSayyad?t=O9CPnivAJGJwaidj1PDahQ&s=09">
            {" "}
            <FaSquareXTwitter />{" "}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
