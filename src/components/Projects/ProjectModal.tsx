import type { Project } from '../../types'
import { motion } from 'framer-motion';

interface Props {
  project: Project
  onClose: () => void
}

const ProjectModal = ({ project, onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      {/* Overlay */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 25,
          duration: 0.3 
        }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div layoutId={`project-card-${project.id}`} className="relative z-10 bg-white w-full max-w-4xl mx-4 p-4 rounded-xl shadow-2xl  flex flex-col max-h-[90vh]">
        {/* Image */}
        <motion.img
          layoutId={`project-image-${project.id}`}
          src={project.img}
          alt={project.title}
          className="w-full h-100 rounded-sm object-cover"
        />

        {/* Content */}
        <div className="p-6 overflow-y-auto flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{project.title}</h2>

          <p className="text-neutral-600">{project.tagline}</p>

          {/* Description */}
          <p className="text-neutral-600">
            <strong className="text-neutral-900">Desafio:</strong>{" "}
            {project.challenge}
          </p>

          <div>
            <ul>
              {" "}
              <strong className="text-neutral-900">Solucion:</strong>
              {project.solution.map((sol) => (
                <li> - {sol}</li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="text-xs bg-black/5 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-2">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                className="text-red-500 font-medium"
              >
                Ver proyecto
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                className="text-neutral-600"
              >
                Código
              </a>
            )}
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-8 h-8"
        >
          ✕
        </button>
      </motion.div>
    </div>
  );
}

export default ProjectModal