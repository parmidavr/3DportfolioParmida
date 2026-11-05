
import { useState } from "react";

const skills = [
  // Data Science & AI
  { name: "Python", category: "data" },
  { name: "SQL", category: "data" },
  { name: "Data Visualization", category: "data" },
  { name: "Dash", category: "data" },
  { name: "Plotly", category: "data" },

  // Programming
  { name: "C++", category: "programming" },
  { name: "Java", category: "programming" },
  { name: "JavaScript", category: "programming" },
  { name: "HTML / CSS", category: "programming" },
  { name: "PHP", category: "programming" },
  { name: "OCaml", category: "programming" },
  { name: "Prolog", category: "programming" },

  // Databases & Tools
  { name: "PostgreSQL", category: "tools" },
  { name: "JSON", category: "tools" },
  { name: "Excel", category: "tools" },
  { name: "Git / GitHub", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "IntelliJ IDEA", category: "tools" },

  // Web & Software Development
  { name: "React.js", category: "development" },
  { name: "WordPress", category: "development" },
  { name: "Elementor", category: "development" },
  { name: "Leaflet.js", category: "development" },
  { name: "Qt", category: "development" },
  { name: "UML", category: "development" },
  { name: "MVC Architecture", category: "development" },

  // Spoken Languages
  { name: "English — C1", category: "languages" },
  { name: "French — C1", category: "languages" },
  { name: "Persian — Native", category: "languages" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "data", label: "Data Science & AI" },
  { id: "programming", label: "Programming" },
  { id: "tools", label: "Databases & Tools" },
  { id: "development", label: "Web & Software" },
  { id: "languages", label: "Languages" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" ||
      skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-16 px-4 relative">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          My <span className="text-[#915EFF]">Skills</span>
        </h2>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#915EFF] text-white"
                  : "bg-[#151030] text-[#aaa6c3] hover:text-white hover:bg-[#211747]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#151030] border border-[#30234d] rounded-xl p-5 text-center"
            >
              <h3 className="text-white font-medium text-sm sm:text-base">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
