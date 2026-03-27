import { contact } from "../content"
import { motion } from "framer-motion"
import { contactIcons } from "../lib/icons"

const Contact = () => {
    const getContactLink = (type: string, value: string) => {
        switch (type) {
            case 'email':
                return `mailto:${value}`
            case 'whatsapp':
                return `https://wa.me/${value}`
            default:
                return '#'
        }
    }

  return (
    <section id="contact" className="py-20">
      <div className="px-6 text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold">
            {contact.title}
          </h2>

          <p className="text-neutral-600 mt-4">
            {contact.subtitle}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col items-center justify-center mt-10 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-neutral-600 mb-2">Escribeme:</h2>
          <div className="flex justify-center gap-4 mt-10">
            {contact.actions.map((action) => {
                
                const Icon = contactIcons[action.icon as keyof typeof contactIcons]
                
                return (
                    <a
                        key={action.type}
                        href={getContactLink(action.type, action.value)}
                        className={`flex items-center gap-2 text-sm px-6 py-3 rounded-full transition
                            ${action.type === 'email'
                            ? 'bg-neutral-800 text-white hover:bg-black'
                            : 'bg-green-500 text-white hover:bg-green-600'
                        }`}
                    >
                        {Icon && <Icon size={25}/>}
                        {action.label}
                    </a>
                )
            })}
            
          </div>
          
        </motion.div>

        {/* Info */}
        <div className="mt-10 text-neutral-500 text-sm space-y-2">
          <p>{contact.location.city}, {contact.location.country}</p>
          <p>{contact.location.icon}</p>
        </div>

      </div>
    </section>
  )
}

export default Contact