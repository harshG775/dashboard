import {Link } from "react-router-dom"
export default function Setting() {
    return (
    <div className="p-4 sm:ml-64">            
            <h2 className='flex mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>
                <Link to="/" className=" cursor-pointer">
                    <i className='fa-solid fa-arrow-left w-5 h-5 mr-3'></i>
                </Link>
                Journal Entry
            </h2>
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Settings
        </h2>
        <main className=" p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 h-full overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <span className="mb-8 w-full text-gray-200  ">business details</span>
            <div className="grid gap-6 mb-8  ">
                <Link to="/settings/business-details" className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">

                    <i className="fa-solid fa-building   w-5 h-5 mr-3"></i>
                    <span className="w-full">business-details</span>
                    <i className="fa-solid fa-angle-right  w-4 h-4 ml-2"></i>
                </Link> 
            </div>
          </div>
        </main>
    </div>
    )
}