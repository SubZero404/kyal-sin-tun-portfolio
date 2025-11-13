import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef();
  const form = useRef();
  const [isTouched, setIsTouched] = useState(false);

  // GSAP animation
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "bottom bottom",
          // scrub: true,
          toggleActions: "play none none reverse"
        },
      });

      // Image fade only
      tl.from(sectionRef.current.querySelector("#contact-img"), {
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      })
      // Title
      .from(sectionRef.current.querySelector("h2"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      }, "-=0.8")
      // Description
      .from(sectionRef.current.querySelector(".contact-description"), {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      }, "-=0.6")
      // Social Links container
      .from(sectionRef.current.querySelector(".social-links-container"), {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "back.out(1.5)",
      }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsTouched(true);
    setTimeout(() => setIsTouched(false), 300);

    emailjs
      .sendForm(
        "service_qxz9bsy",
        "template_6jvv3ze",
        form.current,
        "aLca0cCONoS4Y_ilT"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        () => {
          alert("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center 
      bg-black md:bg-gradient-to-r md:from-black md:via-gray-1000 md:to-gray-900 
      text-white px-6 pt-16 gap-10 overflow-hidden"
    >
      {/* Left Image */}
      <div className="flex-1 flex items-end justify-center h-full">
        <img
          id="contact-img"
          src="/img/contact.png"
          alt="Contact illustration"
          className="w-[90%] md:w-[550px] lg:w-[600px] object-contain md:object-cover rounded-2xl shadow-lg md:rounded-none md:rounded-bl-2xl"
          style={{ alignSelf: "flex-end" }}
        />
      </div>

      {/* Right Form */}
      <div className="flex-1 flex flex-col items-center font-lexend">
        <h2 className="text-4xl font-bold mb-3">
          Let’s <span className="contact-title text-red-600">Connect</span>
        </h2>

        <p className="contact-description text-gray-400 mb-10 text-center max-w-lg w-9/12">
          Have a project in mind or just want to say hi? Fill out the form
          below, and I’ll get back to you soon.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 w-full max-w-sm"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-2 rounded-md text-sm bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-600 outline-none transition-all"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-2 rounded-md text-sm bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-600 outline-none transition-all"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="3"
            required
            className="p-2 rounded-md text-sm bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-600 outline-none transition-all resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition-all py-2 rounded-md text-sm font-semibold tracking-wide active:scale-95 shadow-md"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-3 mt-10 pb-16 lg:pb-0 social-links-container">
          <p className="text-gray-400 text-sm uppercase tracking-wide">
            or contact from social
          </p>
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.facebook.com/subzero404"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/kyal-sin-tun-234900341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/SubZero404"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
