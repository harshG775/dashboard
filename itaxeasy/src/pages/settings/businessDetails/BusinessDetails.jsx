import { Link } from "react-router-dom"
export default function BusinessDetails() {
    return (
		<div className='p-4 sm:ml-64'>
			<h2 className='flex mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>
				<Link to='/settings'>
						<i className='fa-solid fa-arrow-left w-5 h-5 mr-3'></i>
						Business Details
				</Link>
			</h2>
			<main className=' p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 h-full overflow-y-auto'>
				<form>
					<div className='grid md:grid-cols-2 md:gap-6'>
						<div className='mb-6'>
							<label
								htmlFor='text'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
							>
								Business name
							</label>
							<input
								type='text'
								id='text'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='Business name'
							/>
						</div>
						<div className='mb-6'>
							<label
								htmlFor='text'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
							>
								Short name
							</label>
							<input
								type='text'
								id='text'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='Short name'
							/>
						</div>
					</div>
					<div className='mb-6'>
						<label
							htmlFor='text'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Print name
						</label>
						<input
							type='text'
							id='text'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Print name'
						/>
					</div>
					<div className='mb-6'>
						<label
							htmlFor='password'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Address
						</label>
						<textarea
							name='address'
							id='address'
							cols='30'
							rows='10'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Address'
						></textarea>
					</div>
					<div className='grid md:grid-cols-2 md:gap-6'>
						<div className='mb-6'>
							<label
								htmlFor='email'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
							>
							</label>
							<label
								htmlFor='countries'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
							>
								State
							</label>
							<select id='countries' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
								<option value='' disabled='' hidden=''>
									Select State
								</option>
								<option value='Andhra Pradesh'>
									Andhra Pradesh
								</option>
								<option value='Arunachal Pradesh'>
									Arunachal Pradesh
								</option>
								<option value='Assam'>Assam</option>
								<option value='Bihar'>Bihar</option>
								<option value='Chhattisgarh'>
									Chhattisgarh
								</option>
								<option value='Goa'>Goa</option>
								<option value='Gujarat'>Gujarat</option>
								<option value='Haryana'>Haryana</option>
								<option value='Himachal Pradesh'>
									Himachal Pradesh
								</option>
								<option value='Jammu and Kashmir'>
									Jammu and Kashmir
								</option>
								<option value='Jharkhand'>Jharkhand</option>
								<option value='Karnataka'>Karnataka</option>
								<option value='Kerala'>Kerala</option>
								<option value='Ladakh'>Ladakh</option>
								<option value='Madhya Pradesh'>
									Madhya Pradesh
								</option>
								<option value='Maharashtra'>Maharashtra</option>
								<option value='Manipur'>Manipur</option>
								<option value='Meghalaya'>Meghalaya</option>
								<option value='Mizoram'>Mizoram</option>
								<option value='Nagaland'>Nagaland</option>
								<option value='Odisha'>Odisha</option>
								<option value='Punjab'>Punjab</option>
								<option value='Rajasthan'>Rajasthan</option>
								<option value='Sikkim'>Sikkim</option>
								<option value='Tamil Nadu'>Tamil Nadu</option>
								<option value='Telangana'>Telangana</option>
								<option value='Tripura'>Tripura</option>
								<option value='Uttarakhand'>Uttarakhand</option>
								<option value='Uttar Pradesh'>
									Uttar Pradesh
								</option>
								<option value='West Bengal'>West Bengal</option>
								<option value='Andaman and Nicobar Islands'>
									Andaman and Nicobar Islands
								</option>
								<option value='Chandigarh'>Chandigarh</option>
								<option value='Dadra and Nagar Haveli'>
									Dadra and Nagar Haveli
								</option>
								<option value='Daman and Diu'>
									Daman and Diu
								</option>
								<option value='Delhi'>Delhi</option>
								<option value='Lakshadweep'>Lakshadweep</option>
								<option value='Puducherry'>Puducherry</option>							
							</select>
						</div>
						<div className='mb-6'>
							<label
								htmlFor='city'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
							>
								city
							</label>
							<input
								type='text'
								id='city'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='city name'
							/>
						</div>
						<div className='mb-6'>
                             <label htmlFor='date' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
								Financial Year Beginning
							</label>
							<input
								type='date'
								id='date'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
						</div>
						<div className='mb-6'>
							<label
								htmlFor='Books'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
							>
								Books Commencing From
							</label>
							<input
								type='text'
								id='Books'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
						</div>
                        <div className="mb-6">
                            <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your number</label>
                            <input type="tel" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                        </div>
                            

                        <label className="relative inline-flex items-center mb-4 cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"/>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Enabled GST</span>
                        </label>
                        <br />

                        <div className="mb-6">
                            <label htmlFor="GSTIN" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GSTIN</label>
                            <input type="text" id="GSTIN" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="IT-PAN" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">IT PAN</label>
                            <input type="text" id="IT-PAN" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                        </div>

                        <label className="relative inline-flex items-center mb-4 cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"/>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Enable CESS</span>
                        </label>



					</div>

					<div>
                    <button type='submit' className=' px-12 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
						Submit
					</button>
                    </div>
				</form>
			</main>
		</div>
	);
}
