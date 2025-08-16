function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center py-20 from-gray-900 to-gray-800 text-gradient-to-b">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Ejie</h2>
      <p className="max-w-xl md:text-lg mb-6 text-sm">
        A passionate web developer building functional web apps. I also develop
        native and cross-platform mobile applications.
      </p>
      <a
        href="resume.pdf"
        className="bg-gray-600 hover:bg-gray-900 text-white px-6 py-3 rounded-lg"
        download
      >
        Download Resume
      </a>
    </section>
  );
}
export default HeroSection;
