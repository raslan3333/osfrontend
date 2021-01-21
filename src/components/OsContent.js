import SignUp from "./SignUp";
import Product from "./Product";
import SignIn from "./SignIn";


const OsContent = () => {

    return (
<div className="p-3 grid grid-cols-1 lg:grid-cols-6 w-screen">
    <div className=" lg:col-start-2 lg:col-span-4">
        <div className="p-4 b-shadow mt-12 rounded bg-white">
            <h1>BIO</h1>
        </div>

        <div className="grid  sm:grid-cols-6 grid-cols-1 gap-3 sm:gap-3 mt-3 mb-6  ">
            <div className='sm:col-start-1 sm:col-span-2'>
                <SignIn className=' p-4 b-shadow  rounded bg-white' />
            </div>

            <div className="  sm:col-end-7 sm:col-span-4 p-4 b-shadow rounded bg-white">

            </div>
        </div>
    </div>
</div>

    );
}

export default OsContent;
