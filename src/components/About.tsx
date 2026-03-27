import { about } from "../content";
import { aboutIcons } from "../lib/icons";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="flex flex-col p-12 md:p-12 ">
      <h2 className="pb-12 md:pb-14 mx-auto text-4xl font-bold">
        {about.title}
      </h2>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-12 border border-red-700 rounded-xl">
        {/* Left */}
        <div className="flex flex-col gap-6">
            <span className="max-w-20 text-sm text-red-500 font-medium bg-red-700/20 backdrop-blur px-2 py-1 rounded-sm ">
                {about.badge}
            </span>
          <div className="space-y-4 text-neutral-600">
            {about.description.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-4">
            <div>
              <p className="text-sm text-neutral-500">Años de experiencia:</p>
              <p className="text-2xl font-bold">{about.experience.years}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500">Proyectos:</p>
              <p className="text-2xl font-bold">10+</p>
            </div>
          </div>
        </div>

        {/* Right (intereses/cards) */}
        <div className="flex flex-col gap-6 p-0 m-0">
          <span className="max-w-20 text-sm text-red-500 font-medium bg-red-700/20 backdrop-blur px-2 py-1 rounded-sm ">
            Intereses
          </span>
          <div className="grid grid-cols-2 gap-4">
            {about.interests.map((item) => {
              const Icon = aboutIcons[item.icon as keyof typeof aboutIcons];
              return (
                <div
                  key={item.label}
                  className="flex flex-row p-4 gap-4 rounded-xl border border-black/10 hover:shadow-xl bg-white/60 backdrop-blur hover:translate-y-1 transition"
                >
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-[12px] md:text-[14px] text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-red-500/40">
                    {Icon && <Icon size={40} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
