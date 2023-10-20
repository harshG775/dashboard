import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SidBarData = {
    logo:{
        title:"ItaxEasy",
        subTitle:"Easy Accountancy"
    },
}

export default function Sidebar() {
    const [isMenuOpen,setIsMenuOpen]=useState(false)
	const handleMenuToggle =()=>{
		setIsMenuOpen(prev=>!prev)
	}
    // ${isMenuOpen?"ml-72":""}
    return (
        <>
        <button onClick={handleMenuToggle} data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" 
                className=" inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <i className="fa-solid fa-bars   "></i>
        </button>

        <aside 
            className={`${isMenuOpen?"":"-translate-x-full"} fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0`}
            id="sidebar-multi-level-sidebar" aria-label="Sidebar">
            <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">

                <Logo/>
                <SidebarLinks/>
                <button onClick={handleMenuToggle} data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" 
                        className="fixed top-0 inline-flex items-center p-2 mt-6 ml-44  text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                    <i className="fa-solid fa-bars   "></i>
                </button>
                
            </div>
        </aside>        
        </>
    )
}

function Logo() {
    return (
        <div className="border-solid border-2 border-sky-800 p-4 bg-slate-800 sticky top-0  pl-4 whitespace-nowrap">
            <div className="text-2xl font-bold">ItaxEasy</div>
            <div className="text-sm text-gray-500">Easy Accountancy</div>
        </div>
    )
}

function SidebarLinks() {
    const linkData=[
        {
            iconClassName:"fa-solid fa-table-cells-large",
            title:"DashBoard",
            link:"/"
        },
        {
            iconClassName:"fa-solid fa-box-open",
            title:"Items",
            nestedData:[
                {
                    iconClassName:"fa-solid fa-globe",
                    title:"All",
                    link:"items/all",
                },
                {
                    iconClassName:"fa-solid fa-plus",
                    title:"Create",
                    link:"items/create",
                }
            ]

        },
        {
            iconClassName:"fa-solid fa-users",
            title:"Parties",
            nestedData:[
                {
                    iconClassName:"fa-solid fa-globe",
                    title:"All",
                    link:"party/all"
                },
                {
                    iconClassName:"fa-solid fa-plus",
                    title:"Create",
                    link:"party/create"
                },
            ]
        },
        {
            iconClassName:"fa-solid fa-cart-shopping",
            title:"Sales",
            nestedData:[
                {
                    iconClassName:"fa-solid fa-globe",
                    title:"All",
                    link:"sales/all"
                },
                {
                    iconClassName:"fa-solid fa-plus",
                    title:"Create",
                    link:"transactions/sales/create"
                },
                {
                    iconClassName:"fa-solid fa-file-arrow-down",
                    title:"Return",
                    link:"sales/return"
                }
            ]
            
        },
        {
            iconClassName:"fa-solid fa-bag-shopping",
            title:"Purchases",
            nestedData:[
                {
                    iconClassName:"fa-solid fa-globe",
                    title:"All",
                    link:"purchases/all"
                },
                {
                    iconClassName:"fa-solid fa-plus",
                    title:"Create",
                    link:"transactions/purchases/create"
                },
                {
                    iconClassName:"fa-solid fa-file-arrow-down",
                    title:"Return",
                    link:"purchases/return"
                }
            ]

        },
        {
            iconClassName:"fa-solid fa-book-open",
            title:"Accounts",
            nestedData:[
                {
                    iconClassName:"fa-solid fa-globe",
                    title:"All",
                    link:"accounts/all"
                },
                {
                    iconClassName:"fa-solid fa-plus",
                    title:"Create",
                    link:"accounts/create"
                },
                
            ]

        },
        {
            iconClassName:"fa-solid fa-pen",
            title:"Journal",
            link:"/journal"
            
        },
        {
            iconClassName:"fa-solid fa-screwdriver-wrench",
            title:"Settings",
            link:"/settings"

        },

    ]
    return(
        
        <ul className="space-y-2 font-medium sidBarLinks  px-3 py-4">
            {linkData.map((item,i)=>(
                <SidebarLinkToggle item={item} key={i} />
                
            ))}
        </ul>
    )
}

function SidebarLinkToggle(prop) {
    const {item}=prop
    const [isLinkOpen,setIsLinkOpen]=useState(false)
    const handleLinkClick = ()=>{
        setIsLinkOpen(prev=>!prev)
    }
    return (
    <li>
        {typeof(item.nestedData) != "object"?
            <Link to={item.link} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <i className={`${item.iconClassName}  flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray dark:group-hover:text-white`}></i>
                <span className="flex-1 ml-3 whitespace-nowrap">
                    {item.title}
                    <br />
                </span>
            </Link>
        :
            <button onClick={handleLinkClick} type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <i className={`${item.iconClassName}  flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white`}></i>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    {item.title}
                </span>
                <i className="fa-solid fa-angle-down   w-3 h-3"></i>
            </button>
            
        }
        <ul id="dropdown-example" className={`${isLinkOpen?"":"hidden"} py-2 space-y-2`}>
            {typeof(item.nestedData) == "object"? item?.nestedData?.map((e,i)=>(
                <li key={i}>
                    <Link to={e.link} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-500  dark:hover:bg-gray-700">
                    <i className={`${e.iconClassName}   flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white`}></i>
                        {e.title}
                    </Link>
                </li>
            )):""}
        </ul>
    </li>
    )
}
