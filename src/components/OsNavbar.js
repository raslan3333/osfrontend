import React from 'react';
import OsSearch from "./OsSearch";
import Heart from "./iconcomponents/outline/Heart";
import ShoppingCart from "./iconcomponents/outline/ShoppingCart";
import User from "./iconcomponents/outline/User";
import DropDown from "./DropDown";


const OsNavbar = () => {
    const lang = "EN";
    return (

        /*
                <div className='flex justify-between w-full z-40'>
                    <div className="flex font-bold gap-0 text-xl h-5 ">
                        <div className="box-content text-blue-400 text-xl">Online</div>
                        <div className="box-content text-green-400 text-xl">Shop</div>
                    </div>
                    <div className="w-1/2 ">
                        <OsSearch />
                    </div>

                    <ul className="flex gap-4">
                        <li className=" h-5 min-w-max text-blue-400 text-2xl hidden sm:block"><Heart /></li>
                        <li className=" h-5 min-w-max text-blue-400 text-2xl hidden sm:block"><ShoppingCart /></li>

                        <li className=" h-5 min-w-max text-blue-400 text-2xl "><Categories/></li>
                        <li className=" h-5  min-w-max text-blue-400 text-2xl"><User/></li>
                        <li className="h-5    min-w-max"><div className="font-semibold border border-blue-400 text-blue-400 p-0 pl-1 pr-1 rounded">AR</div></li>
                    </ul>
                </div>
        */
        <header className=" flex flex-col sm:flex-row ">
            <div className=" flex w-full items-center justify-between p-1">
                <a className="flex title-font font-medium items-center text-gray-900 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="2"
                         className="w-10 h-10 bg-green-400 p-2 text-blue-400 rounded-full" viewBox="0 0 24 24">

                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>

                    </svg>
                    {/*
                    <span className="ml-3 text-xl hidden sm:block">OnlineShop</span>
*/}
                    <div className="hidden sm:block">
                        <div className="flex font-medium items-center font-bold gap-0 text-xl ml-3 text-xl  ">
                            <div className="box-content text-blue-400 text-xl">Online</div>
                            <div className="box-content text-green-400 text-xl">Shop</div>
                        </div>
                    </div>

                </a>
                <div className="flex-shrink w-1/2  max-w-screen-lg hidden sm:block">
                    <OsSearch/>
                </div>

                <ul className="flex w-1/2 sm:w-auto items-center text-base justify-between md:justify-center sm:gap-5 mr-1 sm:mr-5">
                    <li className="text-blue-400 text-2xl "><Heart/></li>
                    <li className="text-blue-400 text-2xl "><ShoppingCart/></li>
                    <li className="text-blue-400 text-2xl"><User/></li>
                    <li className="min-w-max">
                        <div className="font-semibold p-0 pl-1 pr-1">
                            <DropDown def={lang}>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">AR</a>
                                <a href="#" id="def" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" >{lang}</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">DE</a>
                            </DropDown>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="block sm:hidden w-full mt-1">
                <div className="flex-shrink ">
                    <OsSearch/>
                </div>
            </div>

        </header>

    );
}

export default OsNavbar;
