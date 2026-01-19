export default function Skills() {
  return (
    <section className="w-screen min-h-screen flex items-center justify-center bg-gray-50 px-4 py-6">
      <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-12 text-center">
          Skills & Technologies
        </h1>

        <div className="space-y-12">
          {/* Row 1 */}
          <div className="flex justify-center gap-24 flex-col md:flex-row">
            <div className="md:w-[320px]">
              <h2 className="text-lg font-semibold mb-2">👨‍💻 Languages</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>PHP (expert), JavaScript (ES6+), Java, Python</li>
                <li>HTML5, CSS3, jQuery</li>
              </ul>
            </div>

            <div className="md:w-[320px]">
              <h2 className="text-lg font-semibold mb-2">📦 Frameworks & UI</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Laravel, CodeIgniter, Spring Boot</li>
                <li>Vue.js, React.js, Tailwind CSS</li>
                <li>WordPress (custom themes, plugins, framework-based setups)</li>
              </ul>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-24 flex-col md:flex-row">
            <div className="md:w-[320px]">
              <h2 className="text-lg font-semibold mb-2">🧱 Architecture & APIs</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>RESTful APIs, MVC, Microservices</li>
                <li>OAuth 2.0, JWT, API security best practices</li>
                <li>Reusable packages & shared libraries</li>
              </ul>
            </div>

            <div className="md:w-[320px]">
              <h2 className="text-lg font-semibold mb-2">☁️ DevOps & Tooling</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Docker, GitHub Actions, Jenkins, CI/CD pipelines</li>
                <li>AWS (EC2, S3, IAM)</li>
                <li>Git, Postman, VS Code, Figma</li>
              </ul>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex justify-center gap-24 flex-col md:flex-row">
            <div className="md:w-[300px]">
              <h2 className="text-lg font-semibold mb-2">💾 Databases & Search</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>MySQL (performance tuning), PostgreSQL</li>
                <li>Redis, GraphQL</li>
              </ul>
            </div>

            <div className="md:w-[340px]">
              <h2 className="text-lg font-semibold mb-2">🧪 Quality & Performance</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Unit, integration, and E2E testing (PHPUnit)</li>
                <li>Refactoring legacy systems, reducing technical debt</li>
                <li>Performance optimization & debugging</li>
              </ul>
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex justify-center gap-24 flex-col md:flex-row">
            <div className="md:w-[320px]">
              <h2 className="text-lg font-semibold mb-2">📋 Practices & Standards</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Agile / Scrum, code reviews, documentation</li>
                <li>WCAG 2.x accessibility standards</li>
                <li>SOLID principles, SDLC</li>
              </ul>
            </div>

            <div className="md:w-[320px]">
              <h2 className="text-lg font-semibold mb-2">🌐 Communication</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>English – Professional working proficiency</li>
                <li>Cross-team collaboration & mentoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
