import React from 'react';
import Search from "./iconcomponents/outline/Search";

function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}


const OsSearch = () => {

    return (

        <div className='flex justify-between border border-blue-400  rounded-full p-1'>
            <div className='flex bg-blue-400 rounded-full h-8 w-8 justify-center items-center'>
                <div className='w-6 text-white'>
                    <Search width='21' stroke='white' height='21' />

                </div>
            </div>
            <input type="text" className='rounded-2xl flex-grow p-1 h-8 outline-none'/>
            <div className='flex bg-green-400 rounded-full h-8 w-24 justify-center items-center'>
                <div className=' font-semibold text-white'>Categories</div>
            </div>

        </div>
    );
};

export default OsSearch;
