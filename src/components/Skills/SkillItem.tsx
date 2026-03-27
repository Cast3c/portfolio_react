type Skill = {
  name: string
  description: string
  icon?: string
}

type Props = {
  skill: Skill
  index: number
}

import { motion } from "framer-motion"

const SkillItem = ({ skill, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-4 rounded-xl border border-black/10 bg-white/60 backdrop-blur"
    >
      <div className="flex justify-between items-center">
        <h4 className="font-medium">{skill.name}</h4>
      </div>

      <p className="text-sm text-neutral-500 mt-1">
        {skill.description}
      </p>
    </motion.div>
  )
}

export default SkillItem