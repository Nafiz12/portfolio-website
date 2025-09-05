export default function Projects() {
  const projectList = [
    {
      title: "Steam App Redesign",
      description: "Figma UI/UX project focused on improving user experience and modernizing the interface.",
      link: "https://www.figma.com/proto/9MOwEjJw7MLDtJEzdLokeY/Steam-App-Redesign?type=design&node-id=497-1354&scaling=scale-down&page-id=0%3A1&starting-point-node-id=497%3A1354&mode=design",
      label: "View Design",
    },
    {
      title: "Western Student Center Redesign",
      description: "Redesign of the course registration system with emphasis on usability and accessibility.",
      link: "https://www.figma.com/proto/eEzSOVkzETPLvmQ2xyHiuh/Course-Register?node-id=129-4533&page-id=0%3A1",
      label: "View Design",
    },
    {
      title: "Portfolio Website (In Progress)",
      description: "Full-stack site using Laravel and React.js with admin panel, AWS S3 integration, and CI/CD pipeline on EC2.",
      link: "https://github.com/Nafiz12/portfolio-website",
      label: "GitHub Repo",
    },
     {
      title: "khelapora",
      description: "The project aims to build a dynamic website with a secure administrative panel. The key features include a user-friendly dashboard, dynamic content management, and role-based access control.",
      link: "https://github.com/Nafiz12/khelapora",
      label: "GitHub Repo", 
    },
    {
      title: "Audit360",
      description: "Microservice-based audit management system built with Spring Boot at DataSoft.",
    },
    {
      title: "Microfin360",
      description: "Large-scale SaaS for 700+ MFIs in Bangladesh, migrated to Laravel + Vue.js architecture.",
    },
       ];

  return (
    <section className="w-screen min-h-screen bg-gray-50 px-4 py-3 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-blue-600 mb-10 text-center">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm mt-auto"
                >
                  {project.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
