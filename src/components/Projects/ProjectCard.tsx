import type { Project } from "../../types";
import { motion } from 'framer-motion';

interface Props {
    project: Project
    onClick: () => void
}

const ProjectCard = ({ project, onClick }: Props) => {
  return (
    <motion.div layoutId={`project-card-${project.id}`} onClick={onClick} className="cursor-pointer group rounded-xl overflow-hidden border border-black/10 hover:shadow-xl hover:-translate-y-1 transition duration-300">

      {/* Image */}
      <div className="relative overflow-hidden">
        <span className="absolute top-3 left-3 text-xs bg-white/20 backdrop-blur px-2 py-1 rounded">
            {project.category}
        </span> 
        <motion.img
          layoutId={`project-image-${project.id}`}
          src={project.img}
          alt={project.title}
          className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
      </div>

      {/* Content */}
      <div className=" p-4 flex flex-col gap-3 justify-between">
        <h3 className="heading font-semibold text-sm md:text-lg">
          {project.title}
        </h3>

        <p className="hidden md:flex text-sm text-neutral-500">
          {project.tagline}
        </p>   

        {/* Links */}
        <div className="flex gap-3 mt-3 text-sm font-medium">
          {project.links.live && (
            <a href={project.links.live} className="text-red-500 hover:underline">
              Live
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} className="text-neutral-500 hover:underline">
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard