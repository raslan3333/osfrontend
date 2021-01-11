import React from 'react';
import user from '../heroicons/src/outline/user.svg';
import cart from '../heroicons/src/outline/shopping-cart.svg';
import wishlist from '../heroicons/src/outline/heart.svg';
import Search from "antd/lib/input/Search";
import {Breadcrumb, Divider, Menu, PageHeader} from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import OsSearch from "./OsSearch";

const OsNavbar = () => {
    return (

            <div className='flex justify-between'>
                <div className="flex font-bold gap-0 text-xl gap-1 h-5 p-2">
                    <div className="box-content font-bold text-blue-400 text-xl h-5 ">Online</div>
                    <div className="box-content font-bold text-green-400 text-xl h-5 ">Shop</div>
                </div>
             <ul className="flex ">
                 <li className="box-content h-5 p-2"><OsSearch/></li>
             </ul>
                <ul className="flex  gap-6">
                    <li className="box-content h-5 p-2"><img src={wishlist} alt="wishlist" /></li>
                    <li className="box-content h-5 p-2"><img src={cart} alt="cart" /></li>
                    <li className="box-content h-5 p-2"> <img src={user} alt="user" /></li>

                </ul>
            </div>


    );
}

export default OsNavbar;
