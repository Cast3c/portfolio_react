const ProjectCard = ({ project }) => {
  return (
    <div className="group rounded-xl overflow-hidden border border-black/10 hover:shadow-xl transition">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-lg">
          {project.title}
        </h3>

        <p className="text-sm text-neutral-500">
          {project.tagline}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.stack.map((tech) => (
            <span key={tech} className="text-xs bg-black/5 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-3 text-sm">
          {project.links.live && (
            <a href={project.links.live} className="text-red-500">
              Live
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} className="text-neutral-500">
              Code
            </a>
          )}
        </div>
      </div>

    </div>
  )
}

export default ProjectCard