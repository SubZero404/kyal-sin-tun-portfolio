import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (!nav) return;

    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: nav,
        start: "bottom top",
        scrub: true,
      },
    });

    navTween.fromTo(
      nav,
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000070",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ["Home", "About", "Project", "Contact"];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 p-5 text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home">
          <p className="font-lexend text-xl font-semibold tracking-wide">
            Kyal Sin Tun
          </p>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-lexend text-md">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group text-white font-medium"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu (FULL SCREEN) */}
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-white text-black flex flex-col items-center justify-center gap-12 font-bold text-4xl overflow-y-auto transition-transform duration-500 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside menu */}
        <button
          className="absolute top-6 right-6 text-gray-800 hover:text-red-600 transition-all"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        {navItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="hover:text-red-700 transition-all duration-1000"
            style={{
              transform: menuOpen ? "translateX(0)" : "translateX(50px)",
              opacity: menuOpen ? 1 : 0,
              transitionDelay: `${index * 0.1}s`,
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
