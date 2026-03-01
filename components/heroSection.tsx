import Image from "next/image";

function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left - Photo (shown below text on mobile, left on desktop) */}
        <div className="order-1 md:order-none flex justify-center md:justify-start">
          <div className="relative w-52 h-52 md:w-72 md:h-72">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-md opacity-50 scale-105" />
            {/* Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <Image
                src="/MyFace.jpg"
                alt="Ejie's Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="order-2 md:order-none flex flex-col items-center md:items-start text-center md:text-left">
          {/* Badge */}
          <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-white/10 border border-white/20 text-blue-300">
            Available for hire
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ejie
            </span>
          </h2>

          <p className="text-gray-400 max-w-lg md:text-lg text-sm mb-8 leading-relaxed">
            A passionate web developer building functional web apps. I also
            develop native and cross-platform mobile applications. Additionally,
            I have experience in developing and integrating machine learning
            models into applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="resume&appLetter.pdf"
              download
              className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30 text-white"
            >
              Download Resume
            </a>
            
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-white backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 mt-8 justify-center md:justify-start">
            {["React", "Next.js", "TypeScript", "Flutter", "Python"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;