import { useState, useEffect } from 'react'
import { projects } from '../../content'
import ProjectFilters from './ProjectFilters'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import type { Project } from '../../types' 
import { AnimatePresence, LayoutGroup } from 'framer-motion'

const Projects = () => {
  const [active, setActive] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
  if (selectedProject) {
    document.body.style.overflow = 'hidden'
  }

  return () => {
    document.body.style.overflow = 'auto'
  }
}, [selectedProject])

  const filteredProjects =
    active === 'all'
      ? projects.projects
      : projects.projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-24">
      <div className=" px-6 flex flex-col gap-12">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">{projects.title}</h2>
          <p className="text-neutral-500 mt-3">{projects.subtitle}</p>
        </div>

        {/* Filters */}
        <ProjectFilters active={active} setActive={setActive} />

        <LayoutGroup>
          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
          </div>

          {/* Modal */}
          <AnimatePresence>
            {selectedProject && (
              <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
}

export default Projects