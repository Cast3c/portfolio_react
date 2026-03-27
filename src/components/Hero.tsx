import { hero } from "../content";
import heroImage from "@/assets/images/hero.avif";
import { heroIcons } from '../lib/icons';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row md:mt-6 items-center justify-center gap-12">
        {/* Left side */}
        <div className="flex flex-col gap-2 md:gap-3 max-w-3xl">
          <h1 className="heading text-5xl md:text-7xl font-black leading-tight text-[rgba(38,3,3,1)]">
            {hero.name}
          </h1>
          <p className="paraph text-3xl md:text-4xl font-semibold text-neutral-600">
            {hero.title}
          </p>
          <div className="flex items-center gap-4 mt-2 ">
            <div className="flex gap-2">
              {hero.profile.map((link) => {
                const Icon = heroIcons[link.icon as keyof typeof heroIcons];
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    className="text-[rgba(38,3,3,1)] p-2 hover:bg-linear-to-b hover:from-red-700 hover:to-red-400 rounded-full transition-all ease-in-out hover:text-white"
                  >
                    {Icon && <Icon size={20} />}
                  </a>
                );
              })}
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-red-500 via-red-400 to-transparent opacity-60" />
          </div>
        </div>

        {/* Rigth side */}
        <div className="relative bg-radial overflow-hidden from-red-700 via-red-600 to-red-500 rounded-full h-80 w-80 md:w-100 md:h-100">
          <div className="absolute inset-8 blur-3xl bg-radial from-[rgba(89,4,4,0.9)] to-[rgba(89,4,4,0.8)]" />
          <img
            className="relative z-10 object-cover w-full h-full rounded-full"
            src={heroImage}
            alt="Ricardo Profile"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex items-center max-w-sm mx-auto px-6 flex-col mt-18 md:mt-6 gap-4 md:gap-6 text-center text-sm md:text-lg md:max-w-lg">
        <p className="text-neutral-800">
          {hero.tagline} {hero.description}
        </p>
        <a className="flex justify-center w-50 md:w-80 px-6 py-2 bg-radial from-red-400 via-red-500 to-red-700 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition" href={hero.cta.secondary.href}>
          {hero.cta.secondary.label}
        </a>
      </div>
    </section>
  );
};

export default Hero;
