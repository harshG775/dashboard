import { Link,useParams } from "react-router-dom"

export default function All() {
    const urlParams = useParams()

    return (
        <div className='p-4 sm:ml-64'>
            <h2 className='flex mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>
                <Link to="/" className=" cursor-pointer">
                        <i className='fa-solid fa-arrow-left w-5 h-5 mr-3'></i>
                </Link>
                All {urlParams.contentType}
            </h2>
            <main className=' p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 h-full overflow-y-auto'>
                <div class="container flex flex-col items-center px-6 mx-auto">
                    <div>You have not added any parties yet</div>
                    <Link to={`../${urlParams.contentType}/create`} className=" py-4">
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Add {urlParams.contentType}
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    )
}