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
            <div className="md:w-[300px]">
              <h2 className="text-lg font-semibold mb-2">👨‍💻 Languages & Scripting</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>PHP, JavaScript, Java</li>
                <li>HTML5, CSS3, jQuery</li>
              </ul>
            </div>
            <div className="md:w-[300px]">
              <h2 className="text-lg font-semibold mb-2">📦 Frameworks & Libraries</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Laravel, CodeIgniter, Spring Boot</li>
                <li>Vue.js, React.js, Tailwind CSS</li>
              </ul>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-24 flex-col md:flex-row">
            <div className="md:w-[300px]">
              <h2 className="text-lg font-semibold mb-2">🧱 Architecture & Development</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>REST APIs, MVC, Microservices, SOA</li>
                <li>OAuth2, JWT, Git, GitHub</li>
              </ul>
            </div>
            <div className="md:w-[300px]">
              <h2 className="text-lg font-semibold mb-2">☁️ Cloud & Tools</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>AWS (EC2, S3, IAM), Docker, Jenkins, GitHub Actions</li>
                <li>Postman, XAMPP, VS Code, Azure, Visual Studio, Figma</li>
              </ul>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex justify-center gap-24 flex-col md:flex-row">
            <div className="md:w-[300px]">
              <h2 className="text-lg font-semibold mb-2">💾 Databases</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>MySQL, PostgreSQL, Redis</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="md:w-[300px]">
              <h2 className="text-lg font-semibold mb-2">🧪 Testing & Optimization</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Unit, integration, functional, and performance testing</li>
                <li>Debugging, optimization, code quality</li>
              </ul>
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex justify-center gap-24 flex-col md:flex-row">
            <div className="md:w-[300px]">
              <h2 className="text-lg font-semibold mb-2">📋 Workflow & Practices</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Agile (Scrum, Sprints, Retrospectives)</li>
                <li>SOLID principles, SDLC (CMMI Level 5), code reviews</li>
              </ul>
            </div>
            <div className="md:w-[300px]">
              <h2 className="text-lg font-semibold mb-2">🌐 Languages</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>English – Professional Working Proficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
