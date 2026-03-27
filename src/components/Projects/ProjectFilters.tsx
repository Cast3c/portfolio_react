const categories = ['all', 'web', 'app', 'api', 'ecommerce', 'saas']

interface Props {
    active: string
    setActive: (value: string) => void
}

const ProjectFilters = ({active, setActive}: Props) => {
    return (
        <div className="mx-auto flex gap-2">
            {categories.map((cat) => (
                <button 
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-4 py-2 rounded-full text-sm transition
                        ${active === cat
                            ? 'bg-black text-white'
                            : 'bg-black/5 text-neutral/600 hover:bg-black/10'
                        }    
                    `}
                >
                    {cat}
                </button>
            ))}
        </div>
    )
}

export default ProjectFilters