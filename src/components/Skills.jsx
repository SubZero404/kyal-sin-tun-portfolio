import React from "react";
import TextPressure from "./TextPressure/TextPressure";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel, FaPython, FaDatabase, FaGithub, FaGitAlt, FaLinux, FaCertificate, FaUserFriends } from "react-icons/fa";
import { SiBootstrap, SiPostgresql, SiMysql, SiSqlite, SiOracle, SiVercel, SiOpenai } from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    icon: <FaReact className="text-sky-500 text-4xl" />,
    description: "HTML, CSS, JavaScript, Bootstrap, Tailwind, React, React Native and many others",
  },
  {
    title: "Backend",
    icon: <FaLaravel className="text-red-500 text-4xl" />,
    description: "PHP (Laravel), Python (Flask), RESTful APIs",
  },
  {
    title: "Database",
    icon: <FaDatabase className="text-amber-500 text-4xl" />,
    description: "MySQL, PostgreSQL, SQLite, Oracle",
  },
  {
    title: "Tools",
    icon: <FaGithub className="text-gray-700 text-4xl" />,
    description: "Git, GitHub, VS Code, IDE, Linux, AI tools (ChatGPT, Copilot)",
  },
  {
    title: "Certifications",
    icon: <FaCertificate className="text-purple-500 text-4xl" />,
    description: "ITPEC IP & FE, CS50x (includes Management & Strategy)",
  },
  {
    title: "Soft Skills",
    icon: <FaUserFriends className="text-green-500 text-4xl" />,
    description: "Self-motivated, problem-solver, good team player",
  },
];

export default function Skills() {

  return (
    <div className="min-h-screen main-div text-white py-12 px-6 md:px-20">

      <div className="relative h-[200px] md:h-[350px] xl:h-[450px]">
        <TextPressure
          text="SKILLS"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-6 transition">
            {skill.icon}
            <h3 className="mt-4 text-xl font-lexend font-semibold">{skill.title}</h3>
            <p className="text-gray-400 mt-2 text-center">{skill.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
