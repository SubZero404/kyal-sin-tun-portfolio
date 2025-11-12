import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        scrub: true,
      },
    });

    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav className="w-full fixed top-0 left-0 z-50 p-5 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home">
          <p className="font-lexend text-lg">Kyal Sin Tun</p>
        </a>
        <ul className="flex flex-row gap-4 md:gap-8 font-lexend text-md">
          {["Home", "About", "Project", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group text-white"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#f87171]"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
