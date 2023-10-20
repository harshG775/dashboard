import React from "react";

export default function Home() {
    const homeData = {
        linkData:[
            {
                iconClassName:"fa-solid fa-users",
                title:"Parties",
                data:"0",
                cssClass:"p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500",

            },
            {
                iconClassName:"fa-solid fa-table-cells-large",
                title:"Items",
                data:"0",
                cssClass:"p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500",
            },
            {
                iconClassName:"fa-solid fa-arrow-trend-up",
                title:"Stock",
                data:"₹0.00",
                cssClass:"p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500",
            },
            {
                iconClassName:"fa-solid fa-clipboard-check",
                title:"Reports",
                data:"0",
                cssClass:"p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500",
            },
            {
                iconClassName:"fa-solid fa-building-columns",
                title:"Bank",
                data:"₹0.00",
                cssClass:"p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500",
            },
            {
                iconClassName:"fa-solid fa-sack-dollar",
                title:"Cash",
                data:"₹0.00",
                cssClass:"p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500",
            },
        ]
    }
    return (
    <div className="p-4 sm:ml-64">
        <main className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 h-full overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Dashboard
            </h2>
            {/* <!-- Cards --> */}
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
              {/* <!-- Card --> */}
              {homeData.linkData.map((item,key)=>(
                <div key={key} className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800" >
                    <div className={item.cssClass} >
                        <i className={`${item.iconClassName} w-5 h-5 flex justify-center`}></i>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        {item.title}
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            {item.data}
                        </p>
                    </div>
                </div>
              ))}
            </div>

            {/* <!-- Charts --> */}
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Quick Links
            </h2>

            <div className="grid gap-6 mb-8 sm:grid-cols-1 xl:grid-cols-4 ">
                <a href="#" className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                    <i className="fa-solid fa-scale-balanced   w-5 h-5 mr-3"></i>
                    <span className="w-full">Trial Balance</span>
                    <i className="fa-solid fa-arrow-right-long  w-4 h-4 ml-2"></i>
                </a> 
                <a href="#" className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                    <i className="fa-solid fa-indian-rupee-sign w-5 h-5 mr-3"></i>
                    <span className="w-full">Profit & Loss</span>
                    <i className="fa-solid fa-arrow-right-long  w-4 h-4 ml-2"></i>
                </a> 
                <a href="#" className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                    <i className="fa-solid fa-square-poll-vertical w-5 h-5 mr-3"></i>
                    <span className="w-full">Trading A/C</span>
                    <i className="fa-solid fa-arrow-right-long  w-4 h-4 ml-2"></i>
                </a> 
            </div>

            {/* <!-- Charts --> */}
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Cashflow
            </h2>
            <div className="grid gap-6 mb-8 md:grid-cols-2">
              <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800" >
                <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                  Revenue
                </h4>
                <canvas id="pie"></canvas>
                <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400" >
                  {/* <!-- Chart legend --> */}
                  <div className="flex items-center">
                    <span
                      className="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"
                    ></span>
                    <span>Shirts</span>
                  </div>
                  <div className="flex items-center">
                    <span
                      className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"
                    ></span>
                    <span>Shoes</span>
                  </div>
                  <div className="flex items-center">
                    <span
                      className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
                    ></span>
                    <span>Bags</span>
                  </div>
                </div>
              </div>
              <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800" >
                <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                  Traffic
                </h4>
                <canvas id="line"></canvas>
                <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400" >
                  {/* <!-- Chart legend --> */}
                  <div className="flex items-center">
                    <span
                      className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"
                    ></span>
                    <span>Organic</span>
                  </div>
                  <div className="flex items-center">
                    <span
                      className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
                    ></span>
                    <span>Paid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>

    )
}
