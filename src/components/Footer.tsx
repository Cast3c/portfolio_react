import { footer } from "../content"
import { footerIcons } from "../lib/icons"

const Footer = () => {
  const getCurrentYear = new Date().getFullYear(); 
  return (
    <footer className="py-10 border-t border-black/10 mt-20">
      <div className="px-6 flex flex-col items-center text-center gap-6">

        {/* Name */}
        <h3 className="text-lg font-semibold">
          {footer.name}
        </h3>

        {/* Tagline */}
        <p className="text-neutral-500 text-sm max-w-md">
          {footer.tagline}
        </p>

        {/* Quote */}
        <p className="text-sm italic text-neutral-400">
          {footer.quote}
        </p>

        {/* Social */}
        <div className="flex gap-5 text-xl">
          {Object.entries(footer.social).map(([key, value]) => {
            const Icon = footerIcons[key as keyof typeof footerIcons]

            return (
              <a 
                key={key}
                href={value}
                target="_blank"
                className="text-neutral-600 hover:text-red-500 transition"
              >
                {Icon && <Icon />}
              </a>
            )
          })}
        </div>

        {/* Credits */}
        <p className="text-xs text-neutral-400">
          {footer.credits}
        </p>

        {/* Copyright */}
        <p className="text-xs text-neutral-400">
          © {getCurrentYear} {footer.copyright}
        </p>

      </div>
    </footer>
  )
}

export default Footer