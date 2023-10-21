import {Link} from "react-router-dom"
export default function Journal() {
    return (
		<div className='p-4 sm:ml-64'>
            <h2 className='flex mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>
                <Link className=" cursor-pointer">
                    <i className='fa-solid fa-arrow-left w-5 h-5 mr-3'></i>
                </Link>
                Journal Entry
            </h2>
			<main className=' p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 h-full overflow-y-auto'>
                <ul className="grid sm:grid-cols-4 gap-4">
                    <li>Account</li>
                    <li>Debit</li>
                    <li>Credit</li>
                </ul>
                <ul className="grid sm:grid-cols-4 gap-4 py-4">
                    <li >
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Create account</option>
                        </select>
                    </li>
                    <li>
                        <input type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="0" required/>
                    </li>
                    <li>
                        <input type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="0" required/>
                    </li>
                    
                    <li>
                        <i className="fa-solid fa-trash-can cursor-pointer"></i>
                    </li>
                </ul>
			</main>
		</div>
	);
}
