interface Project {
  title: string;
  description: string;
  img: string;
  link: string;
}

function ProjectCards({ projects }: { projects: Project }) {
  return (
    <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 hover:border-purple-400/30 transition-all duration-300">
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={projects.img}
          alt={projects.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <span className="inline-block w-fit px-3 py-0.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-white/10 border border-white/20 text-purple-300">
          Project
        </span>

        <h3 className="text-white text-lg font-bold leading-tight">
          {projects.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {projects.description}
        </p>

        <a
          href={projects.link}
          target="_blank"
          className="mt-1 w-fit px-5 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity shadow-md shadow-purple-500/20 text-white"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}

export default ProjectCards;