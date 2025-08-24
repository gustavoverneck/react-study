import { useState } from "react"

export default function CounterPage () {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col h-screen items-center justify-center bg-black">
            <h1 className="text-4xl font-bold text-white">
                Simple Counter
            </h1>
            <div className="text-3xl text-white mb-6 mt-10">
                {count}
            </div>
            <button
                className="bg-white text-black px-6 py-2 rounded mt-5 hover:bg-black hover:text-white hover:border-1 hover:border-white transition"
                onClick={() => setCount(count + 1)}
            >
                +1
            </button>
        </div>
        
        
    )
}