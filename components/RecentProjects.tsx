"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-purple text-sm uppercase tracking-[0.3em] mb-3">
          What I&apos;ve Worked On
        </p>

        <h1 className="heading">
          Featured <span className="text-purple">Projects</span>
        </h1>

        <p className="text-white-200 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          A selection of web, mobile, and AI projects I&apos;ve worked on.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="min-h-[30rem] flex items-center justify-center"
          >
            <PinContainer
              title={item.title}
              href={item.link === "#" ? undefined : item.link}
            >
              {/* Project Image */}
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-8">
                <div
                  className="relative w-full h-full overflow-hidden rounded-2xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src="/bg.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0 max-h-full object-contain"
                />
              </div>

              {/* Project Title */}
              <h2 className="font-bold lg:text-2xl md:text-xl text-lg">
                {item.title}
              </h2>

              {/* Description */}
              <p
                className="lg:text-base font-light text-sm mt-3 min-h-[72px]"
                style={{
                  color: "#BEC1DD",
                }}
              >
                {item.des}
              </p>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-7 mb-3">
                {/* Tech Icons */}
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index}px)`,
                      }}
                    >
                      <img
                        src={icon}
                        alt="technology"
                        className="p-2 w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>

                {/* Link */}
                {item.link !== "#" ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-purple hover:opacity-80 transition"
                  >
                    <span className="text-sm md:text-base">
                      View Project
                    </span>

                    <FaLocationArrow
                      className="ms-2"
                      color="#CBACF9"
                    />
                  </a>
                ) : (
                  <div className="flex items-center text-white-200">
                    <span className="text-xs md:text-sm">
                      Project Details
                    </span>
                  </div>
                )}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;