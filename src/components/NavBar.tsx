import { useState } from "react"
import { Link } from "react-router-dom"

export default function NavBar () {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex gap-4 p-4 bg-black text-white px-10 items-center">
            <Link 
                to="/"
                className="py-2 px-4 hover:bg-white hover:text-black rounded"
            >
                Home
            </Link>
            <div className="relative">
                <button
                    className="bg-black rounded px-4 py-2 hover:bg-white hover:text-black"
                    onClick={() => setOpen((v) => !v)}
                >
                    Examples ▼
                </button>
                {open && (
                    <div className="absolute left-0 mt-2 bg-black shadow-lg flex flex-col min-w-[120px] z-10 border-l-2 rounded border-white">
                        <Link 
                            to="/counter"
                            className="px-4 py-2 hover:bg-white hover:text-black rounded"
                            onClick={() => setOpen(false)}
                        >
                            Counter
                        </Link>
                        {/* {outros} */}
                    </div>
                )}
            </div>
        </nav>
    )
}