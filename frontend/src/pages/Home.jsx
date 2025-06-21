import my_photo from '../assets/my_photo.jpg';

export default function Home() {
  return (
    <section
  id="home"
  className="w-screen min-h-screen pt-28 pb-12 flex items-center justify-center bg-gray-50"
>
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between px-6 gap-12">
        
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">Md Nafiz Al Ifat</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            I’m a full-stack developer who loves turning complex problems into elegant, user-friendly solutions
          </p>
          <a
            href="#about"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
             style={{ color: 'white' }}
          >
            Learn More About Me
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={my_photo}
            alt="Portfolio Preview"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
