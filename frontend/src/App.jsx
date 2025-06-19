import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
}
function About() {
  return <h1 className="text-3xl font-bold">About Me</h1>
}
function Projects() {
  return <h1 className="text-3xl font-bold">My Projects</h1>
}
function Contact() {
  return <h1 className="text-3xl font-bold">Contact Me</h1>
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed top navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-4 z-50">
        <div className="flex space-x-6 text-blue-600 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Content section with padding-top to avoid overlap */}
      <div className="pt-24 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
