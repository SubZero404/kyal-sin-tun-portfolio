import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaPython,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiMysql, SiFlask, SiVercel } from "react-icons/si";

const icons = [
  { icon: <FaHtml5 /> },
  { icon: <FaCss3Alt /> },
  { icon: <FaJs /> },
  { icon: <SiBootstrap /> },
  { icon: <SiTailwindcss /> },
  { icon: <FaReact /> },
  { icon: <FaLaravel /> },
  { icon: <FaPython /> },
  { icon: <SiFlask /> },
  { icon: <FaPhp /> },
  { icon: <SiMysql /> },
  { icon: <FaDatabase /> },
  { icon: <FaGitAlt /> },
  { icon: <FaGithub /> },
  { icon: <SiVercel /> },
];

export default function Logoline() {
  const loopIcons = [...icons, ...icons]; // duplicate for seamless loop

  return (
    <div className="w-full overflow-hidden bg-black">
      <div className="flex gap-12 animate-scroll-left">
        {loopIcons.map((item, index) => (
          <div
            key={index}
            className="text-5xl text-white opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
