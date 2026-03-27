import { header } from '../content'
import { navIcons } from '../lib/icons'

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center mb-6 z-50">
      
      <nav className="relative flex flex-row max-w-md w-full justify-between px-6 py-4 rounded-full
        bg-black/10 backdrop-blur-sm border border-white/40 shadow-lg">

        {/* Glow interno */}
        <div className="absolute inset-0 rounded-full bg-radial from-black/10 to-white/80 pointer-events-none" />

        {header.navLinks.map((link) => {
          const Icon = navIcons[link.icon as keyof typeof navIcons]

          return (
            <a 
              key={link.key}
              href={link.href}
              className="relative flex flex-col items-center justify-center text-slate-700/90 hover:text-white transition"
            >   
              {Icon && <Icon size={25} />}
            </a>
          )
        })}

      </nav>

    </div>
  )
}

export default BottomNav