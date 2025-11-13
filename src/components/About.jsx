import { useGSAP } from "@gsap/react";
import MetaBalls from "./MetaBalls/MetaBalls";
import ScrollFloat from "./ScrollFloat/ScrollFloat";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { FaDownload } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const splitWords = SplitText.create(".about-description", {
      type: "chars, words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 60%",
        end: "95% bottom",
        scrub: true,
      },
    });

    scrollTimeline
      .from(splitWords.chars, {
        // opacity: 0,
        xPercent: 20,
        visibility: "hidden",
        duration: 1,
        ease: "expo.out",
        stagger: 0.05,
      })

    gsap.from("#download-cv-btn", {
      scrollTrigger: {
        trigger: "#download-cv-btn",
        start: "top 85%",
        end: "bottom 70%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      duration: .5,
      yPercent: 50,
      ease: "back.out",
    });
  });

  return (
    <section
      id="about"
      className=" relative bg-gray-900 text-gray-100 min-h-screen p-8 md:p-16 flex flex-col justify-center"
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <MetaBalls
          color="#ff6262ef"
          cursorBallColor="#ff6262ef"
          cursorBallSize={2}
          ballCount={15}
          animationSize={70}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.05}
          clumpFactor={1}
          speed={0.3}
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-6 z-10">
        <div className="text-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            About Me
          </ScrollFloat>
        </div>

        <p className="text-lg md:text-xl leading-relaxed font-lexend about-description">
          I’m a {" hello"}
          <span className="text-red-700">Full Stack Web Developer </span>
          from Myanmar with over 4 years of experience in web development
          <span className="text-red-700"> since 2021</span>. I build responsive,
          user-friendly websites and applications using modern technologies and
          UI libraries. I’m also experienced with APIs and GitHub for version
          control.
        </p>
        <p className="text-lg md:text-xl leading-relaxed font-lexend about-description">
          I hold the <span className="text-red-700"> ITPEC IP & FE </span> and
          completed
          <span className="text-red-700"> Harvard's CS50x</span> course
          certifications, which strengthened my foundation in computer science.
          For comunication I completed Japanese Language
          <span className="text-red-700"> JLPT N4</span> certification. I’m
          eager to work in professional, multicultural environments, especially
          with Japanese companies, and I’m committed to continuous learning,
          team collaboration, and delivering clean, scalable code.
        </p>

        <div className="w-full flex justify-center lg:justify-start">
          <a
            id="download-cv-btn"
            href="/Kyal_Sin_Tun_CV_Resume.pdf"
            download="Kyal_Sin_Tun_CV_Resume.pdf"
            className="relative inline-flex items-center gap-2 overflow-hidden bg-white text-black px-6 py-3 font-semibold border border-black transition-all duration-300 group"
          >
            {/* Hover background animation */}
            <span className="absolute inset-0 bg-gray-200 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 ease-out"></span>

            {/* Button text + icon */}
            <span className="relative z-10 flex items-center gap-2">
              <FaDownload className="text-lg transition-transform duration-300 group-hover:-translate-y-1" />
              Download CV
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
