import { useState } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  // Mobile menu open/close state
  const [isOpen, setIsOpen] = useState(false);
  

  // ✅ Single source of truth for nav items (edit only here)
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Publications", href: "#publications" },
    { label: "Contact", href: "#contact" },
  ];

  // Close mobile menu after clicking a link
  const handleNavClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow px-6 py-4 z-50">
      <div className="flex items-center justify-between w-full">
        {/* Brand (optional) */}
        
         <a href="#home" className=" lg:hidden mt-4 text-blue-600 font-bold text-lg">
          Md Nafiz Al Ifat
        </a>

        {/* ✅ Desktop menu (unchanged layout) */}
        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* ✅ Desktop actions (unchanged) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/admin/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            {/* Login */}
          </Link>

          <a
            href="/Al_Ifat_Md_Nafiz_Resume.pdf"
            download
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
              style={{ color: 'white' }}
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
        </div>

        {/* ✅ Mobile burger button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* ✅ Mobile dropdown menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 bg-white rounded shadow px-4 py-4 flex flex-col gap-3">
          
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {item.label}
            </a>
          ))}

          {/* Resume button in mobile menu */}
          <a
            href="/Al_Ifat_Md_Nafiz_Resume.pdf"
            download
            onClick={handleNavClick}
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
             style={{ color: 'white' }}
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
