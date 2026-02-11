export default function Certifications() {
  const certifications = [
    {
      title: "Software Engineering Essentials",
      issuer: "Coursera",
      date: "2025",
      credentialId: "",
      link: "https://www.credly.com/badges/2fc05920-d089-46ae-9947-4ad688c2e5da/linked_in_profile"
    },
     {
      title: "Progressive Web App with JavaScript: Make a Scavenger PWA",
      issuer: "Coursera",
      date: "2024",
      credentialId: "TC7JSWVGISOQ",
      link: "https://www.coursera.org/account/accomplishments/verify/TC7JSWVGISOQ",
    },
    {
      title: "React Basics",
      issuer: "Meta",
      date: "2025",
      credentialId: "V14A8N3G613H",
      link: "https://www.coursera.org/account/accomplishments/verify/V14A8N3G613H",
    },
    {
      title: "Fundamentals of VueJS",
      issuer: "Board Infinity",
      date: "2025",
      credentialId: "RPB6WT26ZSYL",
      link: "https://www.coursera.org/account/accomplishments/records/RPB6WT26ZSYL",
    },
    {
      title: "Build a Full Website using WordPress",
      issuer: "Coursera",
      date: "2024",
      credentialId: "7J4PP1TTT60L",
      link: "https://www.coursera.org/account/accomplishments/records/7J4PP1TTT60L",
    },
    {
      title: "Prepare Data for Exploration",
      issuer: "Google",
      date: "2022",
      credentialId: "XWJYUBQREMJ2",
      link: "https://www.coursera.org/account/accomplishments/records/XWJYUBQREMJ2",
    },
    {
      title: "Ask Questions to Make Data-Driven Decisions",
      issuer: "Google",
      date: "2023",
      credentialId: "3SMZ8RMPVRTN",
      link: "https://www.coursera.org/account/accomplishments/certificate/3SMZ8RMPVRTN",
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      issuer: "Google",
      date: "2022",
      credentialId: "L9UH6GSDZXSQ",
      link: "https://www.coursera.org/account/accomplishments/records/L9UH6GSDZXSQ",
    },
  ];

  // Sort by date descending (newest first)
  const sortedCertifications = certifications.slice().sort((a,b)=>{
    return parseInt(b.date) - parseInt(a.date);
  });

  return (
    <section className="w-screen min-h-screen flex items-center justify-center bg-gray-50 px-4 py-6">
      <div className="max-w-6xl w-full bg-white p-4 rounded-lg shadow-md wrap-anywhere">
        <h1 className="text-8xl font-bold text-blue-600 mb-8 text-center">Certifications</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedCertifications.map((cert, i) => (
            <div key={i} className="border-l-4 border-blue-600 rounded p-6 bg-gray-50 hover:bg-gray-100 transition">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h2>
              <p className="text-sm text-gray-600 mb-1"><strong>Issuer:</strong> {cert.issuer}</p>
              <p className="text-sm text-gray-600 mb-3"><strong>Date:</strong> {cert.date}</p>
              {cert.credentialId && (
                <p className="text-sm text-gray-500 mb-3"><strong>ID:</strong> {cert.credentialId}</p>
              )}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm font-semibold inline-block"
              >
                View Credential →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
