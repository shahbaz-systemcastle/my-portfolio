"use client";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-purple text-sm uppercase tracking-[0.3em] mb-3">
          My Professional Journey
        </p>

        <h1 className="heading">
          Work <span className="text-purple">Experience</span>
        </h1>

        <p className="text-white-200 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Experience across software development, mobile applications,
          frontend development, CRM systems, and business automation.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={12000 + card.id * 2000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "calc(1.75rem * 0.96)",
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col items-start p-6 md:p-8 h-full">
              {/* Icon */}
              <div className="mb-6">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-16 md:w-20"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h2>

                <p className="text-start text-white-100 mt-4 text-sm md:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;