import React from 'react';
import User from "./iconcomponents/outline/User";
import ShoppingCart from "./iconcomponents/outline/ShoppingCart";
import Heart from "./iconcomponents/outline/Heart";
import OsSearch from "./OsSearch";
import Categories from "./iconcomponents/outline/Categories";


const OsNavbar = () => {
    return (

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
                <Categories/>
                <li className=" h-5  min-w-max text-blue-400 text-2xl"><User/></li>
                <li className="h-5    min-w-max"><div className="font-semibold border border-blue-400 text-blue-400 p-0 pl-1 pr-1 rounded">AR</div></li>
            </ul>
        </div>


    );
}

export default OsNavbar;
