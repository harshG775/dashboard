import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function All() {
    const urlParams = useParams()

    console.log(urlParams)
    return (
        <div className='p-4 sm:ml-64'>
            <h2 className='flex mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>
                <Link to='/settings'>
                        <i className='fa-solid fa-arrow-left w-5 h-5 mr-3'></i>
                        All {urlParams.contentType}
                </Link>
            </h2>
            <main className=' p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 h-full overflow-y-auto'>
                <div class="container flex flex-col items-center px-6 mx-auto">
                </div>
            </main>
        </div>
    )
}