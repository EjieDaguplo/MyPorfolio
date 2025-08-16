interface Project {
  title: string;
  description: string;
  img: string;
  link: string;
}
function ProjectCards({ projects }: { projects: Project }) {
  return (
    <div className="bg-white rounded-lg rounded-md overflow-hidden p-6">
      <img
        src={projects.img}
        alt={projects.title}
        className="w-ful h-48 flex md:ml-12"
      />
      <div className="p-4">
        <h3 className="text-xl text-gray-600 font-semibold">
          {projects.title}
        </h3>
        <p className="text-gray-600 mb-3">{projects.description}</p>
        <a
          href={projects.link}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
export default ProjectCards;
