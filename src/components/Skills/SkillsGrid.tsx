import { skills } from "../../content"
import SkillItem from './SkillItem'

const SkillsGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10">

      {skills.categories.map((category) => (
        <div key={category.id}>

          {/* Category title */}
          <h3 className="text-xl font-semibold mb-4">
            {category.title}
          </h3>

          {/* Skills */}
          <div className="space-y-4">
            {category.skills.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index} />
            ))}
          </div>

        </div>
      ))}

    </div>
  )
}

export default SkillsGrid