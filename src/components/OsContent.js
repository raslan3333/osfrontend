import SignIn from "./SignIn";
import {useState} from "react";


const OsContent = () => {


    return (
        <div className="container flex flex-col gap-2 px-4 sm:mx-auto mt-2 ">
            <div className="p-4 b-shadow rounded bg-white">
                <h1>BIO</h1>
            </div>

            <div className="grid sm:grid-cols-6 grid-cols-1 gap-3 sm:gap-3">
                <div className='sm:col-start-1 sm:col-span-2'>
                    <SignIn className=' p-4 b-shadow  rounded bg-white'/>
                </div>

                <div className="  sm:col-end-7 sm:col-span-4 p-4 b-shadow rounded bg-white">
                    <button className=" animate__animated animate__shakeY animate__duration-5s">An animated element</button>
                </div>

            </div>
            {/*<Product/>*/}
        </div>

    );
}

export default OsContent;
