import graduation from '../assets/graduation.jpg';

export default function About() {
  return (
    <section className="w-screen min-h-screen flex items-center justify-center bg-gray-50 px-4 py-6">
      <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-md">

        {/* Top Row: About Me + Photo */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-12">
          {/* About Me Text */}
          <div className="md:w-2/3 text-left">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">About Me</h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              I’m <strong>Md Nafiz Al Ifat</strong>, a full-stack software engineer with over <strong>7 years of experience</strong> building scalable, secure, and user-centered web applications. My expertise spans across <strong>Laravel, Vue.js, React, Java</strong>, and <strong>MySQL</strong>. I recently completed my <strong>Master’s in Computer Science</strong> at Western University with a focus on software architecture, usability, and secure APIs.

              Currently, I’m actively exploring the integration of <strong>AI agents</strong> and <strong>AI-powered tools</strong> in web development — leveraging technologies like <strong>OpenAI APIs</strong> and intelligent automation to create smarter, more interactive user experiences.</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Since childhood, I’ve always been curious about how things work. I used to open up my toys just to understand their internal structure. Even if I couldn't always put them back together! That passion evolved when my father, a mechanical engineer, brought home a computer in 2004. I was fascinated by how the hardware and software worked together so seamlessly. That spark of curiosity led me down the path of software engineering, and it still drives me today to learn, innovate, and build meaningful technology.
            </p>
          </div>

          {/* Photo */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src={graduation}
              alt="Md Nafiz Al Ifat"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Section: Full Width Content */}
        <div className="space-y-12">

          {/* Education */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">🎓 Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Master’s in Computer Science</h3>
                <p className="text-sm text-gray-600">Western University, Ontario (2024–2025)</p>
                <p className="italic text-sm text-gray-500">Focus: Secure APIs, Usability, Software Architecture, Human-Computer Interaction (HCI), Design Principles, Usability, Design Thinking</p>
              </div>
              <div>
                <h3 className="font-semibold">BSc in Software Engineering</h3>
                <p className="text-sm text-gray-600">AIUB, Dhaka, Bangladesh (2012–2017)</p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">💼 Work Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">Graduate Teaching Assistant</h3>
                <p className="text-sm text-gray-600">Western University (Jan 2024 – Apr 2025)</p>
                <ul className="list-disc list-inside text-sm text-gray-500 mt-1 space-y-1">
                  <li>Supported undergraduate Computer Science courses with technical and instructional assistance.</li>
                  <li>Mentored students on RESTful APIs, modular system design, and unit testing practices.</li>
                  <li>Improved lab materials and provided direct feedback on assignments and projects.</li>

                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Software Engineer – Microfin360</h3>
                <p className="text-sm text-gray-600">DataSoft Systems Bangladesh Ltd. (Jan 2020 – Nov 2023)</p>
                <ul className="list-disc list-inside text-sm text-gray-500 mt-1 space-y-1">
      
                <li>Migrated core lending and transaction modules from PHP monolith to Laravel microservices, reducing deployment time by 65% and enabling weekly releases.</li>
                <li>Designed and secured 25+ REST APIs (including payment gateway integrations), reducing API error rates by 40% while supporting 100K+ daily requests.</li>
                <li>Optimized MySQL queries for financial transactions, cutting p95 latency from 850ms → 280ms and reducing DB CPU usage by 30%.</li>
                <li>Built responsive Vue.js components integrated with Laravel APIs, improving usability across low-bandwidth environments.</li>
                <li>Mentored 3 junior developers, enforcing coding standards and decreasing post-release defects by 28%</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Software Developer</h3>
                <p className="text-sm text-gray-600">DataSoft Systems Bangladesh Ltd. (Jan 2017 – Dec 2019)</p>
                <ul className="list-disc list-inside text-sm text-gray-500 mt-1 space-y-1">
                <li>Optimized PHP (CodeIgniter) modules with SQL tuning, boosting transaction speed 20%.</li>
                <li>Built reusable UI libraries, cutting frontend delivery time 15%.</li>
                <li>Partnered with UX to streamline navigation and improve consistency.</li>
                <li>Delivered key modules on time through Agile sprints and Git workflows.</li>

                </ul>
              </div>
 <div>
                <h3 className="font-semibold">InternShip</h3>
                <p className="text-sm text-gray-600">DataSoft Systems Bangladesh Ltd. (October 2016 – Dec 2016)</p>
                <ul className="list-disc list-inside text-sm text-gray-500 mt-1 space-y-1">
                  <li>Built full-stack modules using PHP and HTML.</li>
                  <li>Provided technical support and resolved product issues.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">📜 Certifications</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Progressive Web App with JavaScript: Make a Scavenger PWA  Issued by Coursera</li>
              <li>React Basics  Issued by Meta</li>
              <li>Fundamentals of VueJS Issued by board infinity</li>
              <li>Build a Full Website using WordPress  Issued by Coursera</li>
              <li>Prepare Data for Exploration (XWJYUBQREMJ2) – Google (March 2024)</li>
              <li>Ask Questions to Make Data-Driven Decisions (3SMZ8RMPVRTN) – Google (June 2023)</li>
              <li>Foundations: Data, Data, Everywhere (L9UH6GSDZXSQ) – Google (January 2023)</li>
            </ul>
          </div>

          {/* Hobbies */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">🎯 Hobbies</h2>
            <p className="text-sm text-gray-600">
              Outside of work, I enjoy playing FIFA, following football, learning about new technologies, and exploring cloud platforms like AWS.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
