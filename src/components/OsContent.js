import SignUp from "./SignUp";


const OsContent = () => {

    return (

        <div className="p-3 ">
            <div className="p-4 b-shadow mt-12 rounded bg-white">
                <h1>BIO</h1>
            </div>

            <div className="grid grid-cols-2 gap-7 mt-3 mb-6 md:grid-cols-2 ">
                <SignUp/>
                <div className="  p-4 b-shadow rounded bg-blue-300">

                </div>
            </div>
            <div className="grid grid-cols-6 gap-7 mt-3 ">

                {[...Array(20)].map((x, i) =>
                    <div className="rounded aspect-w-4 aspect-h-5 b-shadow bg-white ">
                        <p className="p-3">Product</p>
                    </div>
                )}

            </div>

        </div>
    );
}

export default OsContent;
