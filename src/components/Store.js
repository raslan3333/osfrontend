import React from 'react';

const Store = () => {

    return (
        <div>
            <h3>Store</h3>
            <form className="flex flex-col space-y-4 w-full" id='buyer'>

                <div className="flex justify-between">
                    <div className="mr-3 flex-grow">
                        <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First
                            Name</label>
                        <input type="text" name="firstname"
                               className="text-sm rounded  p-2 w-full bg-blueGray-100"
                               placeholder="first name"/>
                    </div>
                    <div className="flex-grow">
                        <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" name="lastname" className="text-sm rounded p-2 w-full bg-blueGray-100"
                               placeholder="last name"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Birthdate</label>
                    <input type="date" name="date" className="text-sm rounded  p-2 w-full bg-blueGray-100"/>
                </div>
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">User Name</label>
                    <input type="text" name="username" className="text-sm rounded p-2 w-full bg-blueGray-100"
                           placeholder="jone123"/>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
                    <input type="email" name="email" className="text-sm rounded p-2 w-full bg-blueGray-100"
                           placeholder="jone@example.com"/>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" name="password" className="text-sm rounded p-2 w-full bg-blueGray-100"
                           placeholder="********"/>
                </div>
                <div>
                    <label htmlFor="re-password" className="block text-sm font-medium text-gray-700">Retype
                        Password</label>
                    <input type="password" name="re-password" className="text-sm rounded p-2 w-full bg-blueGray-100"
                           placeholder="********"/>
                </div>
                <button className="bg-emerald-400 p-1.5 rounded uppercase text-white font-semibold">Sign Up</button>
            </form>
        </div>
    );
}

export default Store;
