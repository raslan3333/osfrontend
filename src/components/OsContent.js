import SignUp from "./SignUp";


const OsContent = () => {
    const numbers = [1, 2, 3, 4, 5];
    return (

        <div className="p-3">
            <div className="p-4 b-shadow rounded">

            </div>

            <div className="grid grid-cols-1 mt-3 md:grid-cols-2 ">
                <SignUp/>
                <div className="grid grid-cols-2 p-4 b-shadow rounded bg-blue-300">

                </div>
            </div>
            <div className="flex flex-wrap mt-3 md:grid-cols-2 ">

                {[...Array(2)].map((x, i) =>
                    <div className="rounded m-3 w-48 h-72 b-shadow bg-emerald-200">
                    </div>
                )}


            </div>

        </div>
    );
}

export default OsContent;
