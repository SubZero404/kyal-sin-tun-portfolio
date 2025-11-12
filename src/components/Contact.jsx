import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isTouched, setIsTouched] = useState(false);
  const imgRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsTouched(true);
    setTimeout(() => setIsTouched(false), 300);

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 pt-16 gap-10"
    >
      {/* Left Image */}
      <div className="flex-1 flex items-end justify-center h-full">
        <img
          src="/img/contact.png"
          alt="Contact illustration"
          className="w-[90%] md:w-[550px] lg:w-[600px] object-contain md:object-cover rounded-2xl shadow-lg md:rounded-none md:rounded-bl-2xl"
          style={{ alignSelf: "flex-end" }}
        />
      </div>

      {/* Right Form */}
      <div className="flex-1 flex flex-col items-center font-lexend">
        <h2 className="text-4xl font-bold mb-3">
          Let’s <span className="text-red-600">Connect</span>
        </h2>

        <p className="text-gray-400 mb-10 text-center max-w-lg w-9/12">
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
        <div className="flex flex-col items-center gap-3 mt-10 pb-16 lg:pb-0">
          <p className="text-gray-400 text-sm uppercase tracking-wide">
            or contact from social
          </p>
          <div className="flex gap-6 text-2xl">
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yourusername"
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
