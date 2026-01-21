import CertificateCard from "@/components/certificateCard";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import ProjectCards from "@/components/projectCards";
import { certificate } from "@/data/certificate";
import { projects } from "@/data/project";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <section id="projects" className="py-12 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <ProjectCards key={i} projects={proj} />
          ))}
        </div>
      </section>
      <section
        id="certificate"
        className="py-12 px-6 bg-gray-800 mt-4 text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">Certificates</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {certificate.map((cert, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                cert.img === "ojt.jpg" ? "basis-full flex justify-center" : ""
              }`}
            >
              <img
                src={`${cert.img}`}
                alt={cert.title}
                className="w-64 rounded-lg shadow-md"
              />
              <p className="mt-2 text-center text-sm">{cert.title}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
//To allow npm to read
// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
