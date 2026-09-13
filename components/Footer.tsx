import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* Background Grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt=""
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Contact Content */}
      <div className="flex flex-col items-center relative z-10">
        <p className="text-purple text-sm uppercase tracking-[0.3em] mb-4">
          Let&apos;s Work Together
        </p>

        <h1 className="heading lg:max-w-[50vw]">
          Have an idea? Let&apos;s build something{" "}
          <span className="text-purple">useful together.</span>
        </h1>

        <p className="text-white-200 md:mt-8 my-5 text-center max-w-2xl">
          I&apos;m open to web, mobile, React Native, API integration,
          GoHighLevel, and automation projects.
        </p>

        {/* Email will be connected later */}
        <a href="mailto:YOUR_EMAIL_HERE">
          <MagicButton
            title="Let's Get in Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Bottom Footer */}
      <div className="flex mt-16 md:flex-row flex-col gap-6 justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light text-white-200">
          Copyright © 2026 Shahbaz Hussain
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noreferrer"
              aria-label={info.name}
              className="w-10 h-10 cursor-pointer flex justify-center items-center
              backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75
              bg-black-200 rounded-lg border border-black-300
              transition duration-300 hover:-translate-y-1 hover:border-purple"
            >
              <img
                src={info.img}
                alt={info.name}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;