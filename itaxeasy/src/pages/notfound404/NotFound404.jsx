import { Link } from "react-router-dom"
export default function NotFound404() {
    return (
        <div className="p-4 sm:ml-64">
            <main className="h-full pb-16 overflow-y-auto">
                <div className="container flex flex-col items-center px-6 mx-auto">
                    <i className="fa-solid fa-ban  text-5xl  w-12 h-12 mt-8  text-purple-200"></i>
                    <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
                        404
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300">
                        Page not found. Check the address or {"\t"}
                        <Link to="/" className="text-purple-600 hover:underline dark:text-purple-300" >
                            go back
                        </Link>.
                    </p>
                </div>
            </main>
        </div>
        
    )
}