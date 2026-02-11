export default function Publications() {
  const publications = [
    {
      title: "A Threat-Oriented Study of API Security Challenges in CI/CD Pipelines",
      authors: "Md Nafiz Al Ifat, Sabbir M. Saleh, Nazim H. Madhavji, John Steinbacher",
      venue: "IEEE CloudCom, 2025",
      description: "Research on designing secure REST APIs with OAuth 2.0 and JWT in a microservices context.",
      link: "https://ieeexplore.ieee.org/document/11331540",
    },
    {
      title: "A Defence-Oriented Study of API Security in CI/CD Pipelines",
      authors: "Md Nafiz Al Ifat, Sabbir M. Saleh, Nazim H. Madhavji, John Steinbacher",
      venue: "CCIOT '25: Proceedings of the 2025 10th International Conference on Cloud Computing and Internet of Things",
      link: "https://dl.acm.org/doi/10.1145/3785520.3785526",
    },
   
  ];

  return (
    <section className="w-screen min-h-screen flex items-center justify-center bg-gray-50 px-4 py-6">
      <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Publications</h1>

        <div className="space-y-6">
          {publications.map((p, i) => (
            <div key={i} className="border-l-4 border-blue-600 rounded p-6 bg-gray-50 hover:bg-gray-100 transition">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{p.title}</h2>
              <p className="text-sm text-gray-600 mb-2"><strong>By:</strong> {p.authors}</p>
              <p className="text-sm text-gray-600 mb-3"><strong>Venue:</strong> <span className="italic">{p.venue}</span></p>
              <p className="text-sm text-gray-700 mb-3">{p.description}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm font-semibold inline-block"
              >
                View Publication →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
