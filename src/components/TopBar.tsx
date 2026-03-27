import { header } from "../content";
import logo from "../assets/images/Group 2.webp"

const TopBar = () => {
    return (
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="mx-auto px-6 h-16 flex items-center justify-between bg-white">
          <span className="w-10 h-10">
                <img
                    className="object-cover"
                    src={logo}
                    alt="Ricardo Profile"
                    loading="lazy"
                />
          </span>
          <a className="px-4 py-2 bg-[rgba(38,3,3,0.2)] rounded-xl text-red-700 font-semibold paraph hover:bg-[rgba(38,3,3,1)]">
            {header.cta.primary?.label}
          </a>
        </div>
      </header>
    );
}

export default TopBar;