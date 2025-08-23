import { Link } from "react-router-dom"

export default function NavBar () {
    return (
        <nav className="flex gap-4 p-4 bg-black text-white px-10">
            <Link to="/">Home</Link>
            <Link to="/counter">Counter</Link>
        </nav>
    )
}