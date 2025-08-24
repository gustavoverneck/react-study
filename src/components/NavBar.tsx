import { useState } from "react"
import { Link } from "react-router-dom"

export default function NavBar () {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex p-4 bg-black text-white px-10 items-center">
            <Link 
                to="/"
                className="py-2 px-4 hover:bg-white hover:text-black rounded"
            >
                Home
            </Link>
            <div 
                className="relative"
                role="menu"
                tabIndex={0}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
            >
                <button
                    className="bg-black rounded px-4 py-2 hover:bg-white hover:text-black"
                >
                    Examples ▼
                </button>
                {open && (
                    <div className="absolute left-0 mt-0 bg-black shadow-lg flex flex-col min-w-[120px] z-10 border-l-2 rounded border-white w-40">
                        <Link 
                            to="/counter"
                            className="px-4 py-2 hover:bg-white hover:text-black rounded"
                        >
                            Simple Counter
                        </Link>
                        {/* {outros} */}
                    </div>
                )}
            </div>
        </nav>
    )
}