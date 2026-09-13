const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React Native",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "MySQL",
  "Git",
  "GitHub",
  "Figma",
  "GoHighLevel",
  "WordPress",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-12">
        <p className="text-purple text-sm uppercase tracking-[0.3em] mb-3">
          Technologies I Work With
        </p>

        <h2 className="heading">
          My <span className="text-purple">Skills</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="
              flex items-center justify-center
              min-h-[90px]
              rounded-2xl
              border border-white/[0.1]
              bg-[#10132E]
              text-white
              text-sm md:text-base
              font-medium
              transition-all duration-300
              hover:-translate-y-1
              hover:border-purple
              hover:shadow-lg
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;