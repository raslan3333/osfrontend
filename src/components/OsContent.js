import SignUp from "./SignUp";


const OsContent = () => {

    return (

        <div className="p-4">
            <div className="p-4 border-2 rounded">

            </div>

            <div className="grid grid-cols-1 mt-3 md:grid-cols-2 ">
                <SignUp/>
                <div className="grid grid-cols-2 p-4 border-2 rounded">

                </div>
            </div>

        </div>
    );
}

export default OsContent;
