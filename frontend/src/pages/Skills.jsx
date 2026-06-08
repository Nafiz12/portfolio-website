export default function Skills() {
  const skillCategories = [
    {
      emoji: "👨‍💻",
      title: "Languages",
      skills: ["PHP", "JavaScript (ES6+)", "TypeScript", "Python", "Java", "HTML5", "CSS3", "jQuery"],
    },
    {
      emoji: "📦",
      title: "Frameworks & UI",
      skills: ["Laravel", "Vue.js 3", "React.js", "CodeIgniter", "Symfony", "Livewire", "Alpine.js", "Node.js", "Spring Boot", "Tailwind CSS", "WordPress"],
    },
    {
      emoji: "🧱",
      title: "Architecture & APIs",
      skills: ["REST APIs", "GraphQL", "Microservices", "MVC", "OAuth2 / JWT", "OWASP", "API Security", "Event-Driven Architecture", "RabbitMQ"],
    },
    {
      emoji: "☁️",
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, IAM)", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "CI/CD Pipelines", "Firebase", "Railway"],
    },
    {
      emoji: "💾",
      title: "Databases & Storage",
      skills: ["MySQL", "PostgreSQL", "Redis", "NoSQL", "Firestore", "SQLite", "Performance Tuning", "Background Jobs"],
    },
    {
      emoji: "🧪",
      title: "Quality & Performance",
      skills: ["PHPUnit", "TDD", "Unit Testing", "Integration Testing", "Performance Testing", "Technical Debt Reduction", "Legacy Refactoring", "Debugging"],
    },
    {
      emoji: "🤖",
      title: "AI & LLM",
      skills: ["Claude Code", "OpenAI GPT-3.5/4", "Prompt Engineering", "LLM Integration", "AI-Assisted Development", "Parameter Tuning", "Caching Strategies"],
    },
    {
      emoji: "📋",
      title: "Practices & Standards",
      skills: ["Agile / Scrum", "Code Reviews", "WCAG 2.1", "SOLID Principles", "Design Patterns", "SDLC", "Pair Programming", "Technical Documentation"],
    },
    {
      emoji: "🌐",
      title: "Collaboration",
      skills: ["Mentoring", "Cross-team Collaboration", "Sprint Planning", "Stakeholder Communication", "English (Professional)"],
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
