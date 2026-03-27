import { skills } from "../../content"
import { motion } from "framer-motion"
import SkillsGrid from "./SkillsGrid"

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-red-500 text-sm font-medium">Skills</span>

          <h2 className="text-4xl font-bold mt-2">Arsenal Técnico</h2>

          <p className="text-neutral-500 mt-4">{skills.subtitle}</p>
        </div>

        {/* Content */}
        <SkillsGrid />
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Nivel de Dominio
          </h3>

          <div className="max-w-2xl mx-auto space-y-6">
            {skills.progressSkills?.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-red-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills