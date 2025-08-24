import { Link } from "react-router-dom"
import Dropdown from "./Dropdown"

export default function NavBar () {
    return (
        <nav className="flex p-4 bg-black text-white px-10 items-center">
            <Link 
                to="/"
                className="py-2 px-4 hover:bg-white hover:text-black rounded"
            >
                Home
            </Link>
            <Dropdown
                title="Examples"
                items={[
                    { label: "Simple Counter", to: "/counter" },
                    // Other buttons
                ]}
            />
        </nav>
    )
}