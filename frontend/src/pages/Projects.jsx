export default function Projects() {
  const projectList = [
    {
      title: "Steam App Redesign",
      TechStack: "Tech Stack: Figma",
      description:
        "Figma UI/UX project focused on improving user experience and modernizing the interface.",
      link: "https://www.figma.com/proto/9MOwEjJw7MLDtJEzdLokeY/Steam-App-Redesign?type=design&node-id=497-1354&scaling=scale-down&page-id=0%3A1&starting-point-node-id=497%3A1354&mode=design",
      label: "View Design",
    },
    {
      title: "Western Student Center Redesign",
      TechStack: "Tech Stack: Figma",
      description:
        "Redesign of the course registration system with emphasis on usability and accessibility.",
      link: "https://www.figma.com/proto/eEzSOVkzETPLvmQ2xyHiuh/Course-Register?node-id=129-4533&page-id=0%3A1",
      label: "View Design",
    },
    {
      title: "Portfolio Website",
      TechStack: "Tech Stack: PHP, Laravel, React.js",
      description:
        "Full-stack site using Laravel and React.js with an admin panel, AWS S3 integration, and CI/CD pipeline on EC2.",
      link: "https://github.com/Nafiz12/portfolio-website",
      label: "GitHub Repo",
    },
    {
      title: "FIFA World Cup Hub (In Progress)",
      TechStack: "Tech Stack: Laravel, Vue 3, Tailwind CSS, MySQL, OpenAI API, Railway, Vercel",
      description:
        "An interactive web app that lets users explore FIFA World Cup history, fixtures, and records through a clean, responsive interface. It features an AI-powered chat assistant built with OpenAI’s API, real-time tournament data, and a secure Laravel backend with optimized REST APIs.",
      links: [
        { label: "Live Site", url: "https://worldcup2026hub.vercel.app/" },
        { label: "GitHub Repo", url: "https://github.com/Nafiz12/world-cup-hub" },
      ],
    },
    {
      title: "Khelapora",
      TechStack: "Tech Stack: PHP, MySQL, CodeIgniter, Vercel",
      description:
        "A dynamic website with a secure administrative panel. Features include a user-friendly dashboard, dynamic content management, and role-based access control.",
      link: "https://github.com/Nafiz12/khelapora",
      label: "GitHub Repo",
    },
    {
      title: "Audit360",
      TechStack: "Tech Stack: Java, Spring Boot, MySQL, Redis, Docker",
      description:
        "Microservice-based audit management system built with Spring Boot at DataSoft.",
    },
    {
      title: "Microfin360",
      TechStack: "Tech Stack: PHP, Laravel, Java, Spring Boot, MySQL, Redis, Docker",
      description:
        "Large-scale SaaS for 700+ MFIs in Bangladesh, migrated to a Laravel + Vue.js architecture.",
    },
  ];

  return (
    <section className="w-screen min-h-screen bg-gray-50 px-4 py-3 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-blue-600 mb-10 text-center">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Tech Stack:</span>{" "}
                  {project.TechStack.replace(/^Tech Stack:\s*/i, "")}
                </p>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              </div>

              {/* Handle single or multiple links */}
              {project.links ? (
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.links.map((linkObj, i) => (
                    <a
                      key={i}
                      href={linkObj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {linkObj.label}
                    </a>
                  ))}
                </div>
              ) : (
                project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm mt-auto"
                  >
                    {project.label}
                  </a>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
