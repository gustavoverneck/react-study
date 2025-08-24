export default function HomePage () {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="bg-transparent bg-opacity-90 rounded-xl shadow-lg p-10 animate-fadeIn flex flex-col items-center">
                <h1 className="text-4xl hover:scale-110 transition-transform duration-300">
                    React Playground
                </h1>
                <p className="pt-10 text-xl">
                    Gustavo A. Verneck
                </p>
            </div>
        </div>
    )
}