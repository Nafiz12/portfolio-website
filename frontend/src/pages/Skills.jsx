export default function Skills() {
  const skillCategories = [
    {
      emoji: "👨‍💻",
      title: "Languages",
      skills: ["PHP", "JavaScript (ES6+)", "Java", "Python", "HTML5", "CSS3", "jQuery"],
    },
    {
      emoji: "📦",
      title: "Frameworks & UI",
      skills: ["Laravel", "CodeIgniter", "Spring Boot", "Vue.js", "React.js", "Tailwind CSS", "WordPress", "Adobe Commerce"],
    },
    {
      emoji: "🧱",
      title: "Architecture & APIs",
      skills: ["RESTful APIs", "MVC", "Microservices", "OAuth 2.0", "JWT", "API Security", "Reusable Packages"],
    },
    {
      emoji: "☁️",
      title: "DevOps & Tooling",
      skills: ["Docker", "GitHub Actions", "Jenkins", "CI/CD Pipelines", "AWS (EC2, S3, IAM)", "Git", "Postman", "VS Code", "Figma"],
    },
    {
      emoji: "💾",
      title: "Databases & Search",
      skills: ["MySQL", "Performance Tuning", "PostgreSQL", "Redis", "GraphQL"],
    },
    {
      emoji: "🧪",
      title: "Quality & Performance",
      skills: ["Unit Testing", "Integration Testing", "E2E Testing", "PHPUnit", "Legacy Refactoring", "Technical Debt Reduction", "Performance Optimization"],
    },
    {
      emoji: "📋",
      title: "Practices & Standards",
      skills: ["Agile / Scrum", "Code Reviews", "Documentation", "WCAG 2.x", "SOLID Principles", "SDLC"],
    },
    {
      emoji: "🌐",
      title: "Communication",
      skills: ["English (Professional)", "Cross-team Collaboration", "Mentoring"],
    },
  ];

  return (
    <section className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-blue-50 px-4 py-6">
      <div className="max-w-6xl w-full">
        <h1 className="text-5xl font-bold text-blue-600 mb-4 text-center">
          Skills & Technologies
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit of technologies, practices, and expertise built over 7+ years of professional development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-6 border-t-4 border-blue-600"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.emoji}</span>
                <h2 className="text-xl font-bold text-gray-800">{category.title}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold hover:bg-blue-600 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
