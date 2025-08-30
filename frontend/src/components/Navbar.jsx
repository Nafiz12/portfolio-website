import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow px-6 py-4 z-50">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 sm:gap-0">

        {/* Left nav links */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
          <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>

        {/* Right resume button */}
        <div className="flex items-center gap-4">
          <Link
            to="/admin/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        <a

          href="/Al_Ifat_Md_Nafiz_Resume.pdf"
          download
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 font-semibold rounded hover:bg-blue-700 transition"
          style={{ color: 'white' }}
        >
          <FaDownload className="mr-2" />
          Download Resume
        </a>
        </div>
      </div>
    </nav>
  );
}
