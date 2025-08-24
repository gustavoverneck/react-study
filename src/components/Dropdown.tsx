import { useState } from "react"
import { Link } from "react-router-dom"

interface DropdownItem {
    label: string
    to: string
}

interface DropdownProps {
    title: string
    items: DropdownItem[]
}

export default function Dropdown({ title, items }: DropdownProps) {
    const [open, setOpen] = useState(false);

    return (
        <div 
            className="relative inline-block"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button className="bg-black rounded px-4 py-2 hover:bg-white hover:text-black">
                {title} ▼
            </button>
            {open && (
                <div className="absolute left-0 mt-0 bg-black shadow-lg flex flex-col min-w-[120px] z-10 border-l-2 rounded border-white w-40">
                    {items.map(item => (
                        <Link 
                            key={item.to}
                            to={item.to}
                            className="px-4 py-2 hover:bg-white hover:text-black rounded"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}