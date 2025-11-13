import React from "react";
import { FaLink, FaGithub, FaPlay } from "react-icons/fa";
import ScrollFloat from "./ScrollFloat/ScrollFloat";
import GlareHover from "./GlareHover/GlareHover";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const projects = [
  {
    title: "Cocktail Website",
    image: "/img/project/cocktail_demo.png",
    description:
      "A Cocktail website that sells cocktail and ram. Built using React JS especially using GSAP for scroll animation.",
    tech: ["HTML", "CSS", "JavaScript", "React", "GSAP"],
    link: "https://cocktail-by-kyal.vercel.app/",
    github: "https://github.com/SubZero404/gsap_cocktail.git",
    video: "",
  },
  {
    title: "E-commence Website",
    image: "/img/project/e-commence_demo.png",
    description:
      "This is an e-commerce website where users can browse products, add them to a shopping cart, and place orders.",
    tech: ["Flask Framework", "SQLite", "Node.js", "Jinja2"],
    link: "",
    github: "https://github.com/SubZero404/cs50-final-project.git",
    video: "https://youtu.be/cELsCu7AL7Q",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useGSAP(() => {
    // select all project and loop
    gsap.utils.toArray(".project-div").forEach((div) => {
      // create a timeline for each project div
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: div,
          start: "top 80%",
          end: "bottom 70%",
          toggleActions: "play none none reverse",
          // scrub: true,
          // markers: true
        },
      });

      scrollTimeline
        .from(div.querySelector(".project-img-div"), {
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          div.querySelector(".project-title"),
          {
            opacity: 0,
            yPercent: 30,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .from(
          div.querySelector(".project-description"),
          {
            opacity: 0,
            yPercent: 20,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          [...div.querySelectorAll(".use-skill-div .skill-span")],
          {
            opacity: 0,
            yPercent: 40,
            stagger: 0.15,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          div.querySelector(".btns-div"),
          {
            opacity: 0,
            yPercent: 20,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        );
    });
  });

  return (
    <section
      id="project"
      className="min-h-screen bg-black text-white px-6 py-16"
    >
      <div className="text-center pb-8">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          My Projects
        </ScrollFloat>
      </div>

      <div className="flex flex-col gap-10 max-w-3xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-div overflow-hidden hover:scale-[1.01] transition-transform flex flex-col lg:flex-row items-center"
          >
            {/* 🖼 Image — takes 50% width */}
            <div className="w-full lg:w-1/2 flex justify-center project-img-div">
              <GlareHover
                width="380px"
                height="220px"
                glareColor="#ffffff"
                glareOpacity={0.9}
                glareAngle={-30}
                glareSize={400}
                transitionDuration={1000}
                playOnce={false}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </GlareHover>
            </div>

            {/* 🧠 Description — takes 50% width */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between pt-3 lg:px-6 font-lexend max-w-96">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-red-700 project-title">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 project-description">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 use-skill-div">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="skill-span text-xs bg-zinc-800 px-2 py-1 rounded-lg text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* 🔗 Buttons */}
              <div className="mt-6 flex items-center gap-3 btns-div">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm"
                  >
                    <FaLink /> Visit Site
                  </a>
                )}

                {/* 🐙 GitHub Button */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}

                {/* 🎥 Video Demo */}
                {project.video && project.video !== "#" && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 px-4 py-2 rounded-lg text-sm"
                  >
                    <FaPlay /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
