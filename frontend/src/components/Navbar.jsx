import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';



export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow px-6 py-4 z-50">
      <div className="flex items-center justify-between w-full">
  {/* Left nav links */}
  <div className="flex gap-6">
       <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
    <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
    {/* <a href="/projects" className="text-gray-700 hover:text-blue-600">Projects</a> */}
    <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
  </div>

  {/* Right resume button */}
  <a
    href="/Al_Ifat_Md Nafiz _Resume.pdf"
    download
    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
    style={{color :'white'}}
  >
    <FaDownload className="inline mr-2" />
    Download Resume
  </a>
</div>
      
    </nav>
  );
}