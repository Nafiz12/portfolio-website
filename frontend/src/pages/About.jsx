import graduation from '../assets/graduation.jpg';

export default function About() {
  return (
    <section className="w-screen min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-md">

        {/* Top Row: About Me + Photo */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-12">
          {/* About Me Text */}
          <div className="md:w-2/3 text-left">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">About Me</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              I’m <strong>Md Nafiz Al Ifat</strong>, a full-stack software engineer with over <strong>7 years of experience</strong> 
              building scalable, secure, and user-centered web applications. My expertise spans across 
              <strong> Laravel, Vue.js, React, Java</strong>, and <strong>MySQL</strong>. I recently completed my 
              <strong> Master’s in Computer Science</strong> at Western University with a focus on software architecture, 
              usability, and secure APIs.
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
                <p className="italic text-sm text-gray-500">Focus: Secure APIs, Usability, Software Architecture</p>
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

              {/* Graduate Teaching Assistant */}
              <div>
                <h3 className="font-semibold">Graduate Teaching Assistant</h3>
                <p className="text-sm text-gray-600">Western University (Jan 2024 – Apr 2025)</p>
                <ul className="list-disc list-inside text-sm text-gray-500 mt-1 space-y-1">
                  <li>Supported undergraduate Computer Science courses with technical and instructional assistance.</li>
                  <li>Mentored students on RESTful APIs, modular system design, and unit testing practices.</li>
                  <li>Improved lab materials and provided direct feedback on assignments and projects.</li>
                </ul>
              </div>

              {/* Software Engineer – Microfin360 */}
              <div>
                <h3 className="font-semibold">Software Engineer – Microfin360</h3>
                <p className="text-sm text-gray-600">DataSoft Systems Bangladesh Ltd. (Jan 2020 – Nov 2023)</p>
                <ul className="list-disc list-inside text-sm text-gray-500 mt-1 space-y-1">
                  <li>Modernized a monolithic microfinance SaaS into scalable microservices using Laravel and Spring Boot.</li>
                  <li>Built and managed CI/CD pipelines using Jenkins and GitHub Actions; used Docker for containerization.</li>
                  <li>Applied OWASP-compliant coding, wrote API specs, and contributed to performance optimization.</li>
                  <li>Collaborated in Agile sprints, peer-reviewed code, and mentored junior engineers.</li>
                </ul>
              </div>

              {/* Software Developer */}
              <div>
                <h3 className="font-semibold">Software Developer</h3>
                <p className="text-sm text-gray-600">DataSoft Systems Bangladesh Ltd. (Jan 2017 – Dec 2019)</p>
                <ul className="list-disc list-inside text-sm text-gray-500 mt-1 space-y-1">
                  <li>Developed backend features in PHP (CodeIgniter) and frontend components in Vue.js and React.</li>
                  <li>Built RESTful APIs and integrated dynamic UI components for financial workflows.</li>
                  <li>Ensured clean architecture using SOLID principles and Git-based version control.</li>
                  <li>Collaborated on UI/UX improvements and ensured cross-browser compatibility.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Projects */}
<div>
  <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">🛠️ Projects</h2>

  <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
    <li>
      <strong>Steam App Redesign</strong> – Figma UI/UX project.{' '}
      <a
        href="https://www.figma.com/proto/9MOwEjJw7MLDtJEzdLokeY/Steam-App-Redesign?type=design&node-id=497-1354&scaling=scale-down&page-id=0%3A1&starting-point-node-id=497%3A1354&mode=design"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Design
      </a>
    </li>
    <li>
      <strong>Western Student Center Redesign</strong> – Usability-focused registration module redesign.{' '}
      <a
        href="https://www.figma.com/proto/eEzSOVkzETPLvmQ2xyHiuh/Course-Register?node-id=129-4533&page-id=0%3A1"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Design
      </a>
    </li>
    <li>
      <strong>Portfolio Website (In Progress)</strong> – Built using Laravel and React.js with admin panel, AWS S3 integration, and CI/CD on EC2.{' '}
      <a
        href="https://github.com/Nafiz12/portfolio-website"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repo
      </a>
    </li>
    <li><strong>Audit360 :</strong> Helped develop new microservice-based system for audit management at DataSoft using Spring Boot.</li>
    <li><strong>Microfin360:</strong> Financial SaaS used by 700+ MFIs across Bangladesh, modernized using Laravel and Vue.js.</li>
  </ul>
</div>

{/* Certifications */}
<div>
  <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">📜 Certifications</h2>
  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
    <li>Prepare Data for Exploration (XWJYUBQREMJ2) Google Issued in March 2024 (Learning Path in Progress)</li>
    <li>Ask Questions to Make Data-Driven Decisions (3SMZ8RMPVRTN) Google Issued in June 2023</li>
    <li>Foundations: Data, Data, everywhere (L9UH6GSDZXSQ) Google Issued in January 2023</li>
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
