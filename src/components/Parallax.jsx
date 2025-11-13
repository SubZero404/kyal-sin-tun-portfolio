import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Parallax() {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallax-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    parallaxTimeline.to(".parallax-section .img-div", {
      yPercent: 65,
      ease: "none",
    });
  })

  return (
    <div className="w-full h-80 relative overflow-hidden parallax-section">
      <div className=" w-full h-[200%] absolute bottom-0 left-0 img-div">
        <img
          src="/img/art-bg.jpg"
          alt="art-bg"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000095]"></div>
      <div className="flex flex-col justify-center items-center absolute w-full h-full top-0 left-0">
        <h3 className="text-white font-serif font-bold text-5xl text-center p-5 w-full lg:w-3/4 leading-loose">Transform your business with smart technology.</h3>
      </div>
    </div>
  );
}
export default Parallax;
