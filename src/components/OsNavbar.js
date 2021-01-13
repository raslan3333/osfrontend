import React from 'react';
import User from "./iconcomponents/outline/User";
import ShoppingCart from "./iconcomponents/outline/ShoppingCart";
import Heart from "./iconcomponents/outline/Heart";
import OsSearch from "./OsSearch";


const OsNavbar = () => {
    return (

        <div className='flex justify-between'>
            <div className="flex font-bold gap-0 text-xl h-5 p-2">
                <div className="box-content text-blue-500 text-xl">Online</div>
                <div className="box-content text-green-400 text-xl">Shop</div>
            </div>
            <div className="w-1/2 min-w-max">
                <OsSearch />
            </div>

            <ul className="flex gap-5">
                <li className=" h-5 p-2 min-w-max text-blue-500 text-2xl"><Heart /></li>
                <li className=" h-5 p-2 min-w-max text-blue-500 text-2xl"><ShoppingCart /></li>
                <li className=" h-5 p-2 min-w-max text-blue-500 text-2xl"><User/></li>
                <li className=" h-5 p-1 min-w-max"><div className="font-semibold border-2 border-blue-500 text-blue-500 p-1  rounded">AR</div></li>
            </ul>
        </div>


    );
}

export default OsNavbar;
