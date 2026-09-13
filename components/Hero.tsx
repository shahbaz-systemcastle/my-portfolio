import { FaLocationArrow } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />

        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />

        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Background Grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white
        dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center
          justify-center dark:bg-black-100 bg-white
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Hero Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw]
          flex flex-col items-center justify-center"
        >
          {/* Name */}
          <p
            className="uppercase tracking-[0.3em] text-xs text-center
            text-blue-100 mb-4"
          >
            Shahbaz Hussain
          </p>

          {/* Main Heading */}
          <TextGenerateEffect
            words="Building Modern Web & Mobile Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          {/* Professional Title */}
          <p
            className="text-center text-purple-200 font-medium
            text-sm md:text-base lg:text-lg mt-3"
          >
            Web & Mobile Developer | React Native | GoHighLevel
          </p>

          {/* Intro */}
          <p
            className="text-center md:tracking-wide mt-5 mb-8
            text-sm md:text-base lg:text-lg text-white-200
            max-w-3xl leading-relaxed"
          >
            I turn ideas into functional web and mobile products. I work with
            React Native, modern web technologies, API integrations, and
            GoHighLevel to build responsive applications, business websites,
            and automated workflows that solve real problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#projects">
              <MagicButton
                title="View My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <a href="#contact">
              <MagicButton
                title="Contact Me"
                icon={<IoMailOutline />}
                position="right"
                otherClasses="!bg-[#161A31]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;