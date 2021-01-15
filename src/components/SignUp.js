import illustration from "../Illustration.png";
import React, { useState } from 'react';
const SignUp = () => {
    const [checked, setChecked]= useState( '' );
    const users = {
        buyer : 'The buyer',
        seller : 'The seller',
        store : 'The store',
    }
    var user ='';
     const handleCheck =event => {
        setChecked( event.target.value)


    }

    return (



        <div className="grid grid-cols-1 xl:grid-cols-2  p-5 gap-2 rounded b-shadow bg-white border border-gray-100">

            <form className="flex flex-col space-y-4 w-full" id='buyer'>
                <div className="font-bold text-xl text-blueGray-600">
                    Create An Account
                </div>
                <div >
                    <input  onChange={handleCheck} className="mr-1" type="radio" id="male" name="usertype" value="buyer"/>
                    <label className="mr-4" htmlFor="male">Buyer</label>
                    <input  onChange={handleCheck}  className="mr-1" type="radio" id="female" name="usertype" value="seller"/>
                    <label className="mr-4" htmlFor="female">Seller</label>
                    <input  onChange={handleCheck}  className="mr-1" type="radio" id="other" name="usertype" value="store"/>
                    <label className="mr-4" htmlFor="other">Store</label>
                </div>
                <div className="flex justify-between">
                    <div className="mr-3">
                        <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First
                            Name</label>
                        <input type="text" name="firstname"
                               className="text-sm rounded  p-2 w-full bg-blueGray-100"
                               placeholder="first name"/>
                    </div>
                    <div>
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
            <div>{checked} hello</div>

            <img src={illustration} alt="image" className="col-span-1 "/>
        </div>
    );
}

export default SignUp;
