const SignIn = () => {
    return (
        <div className="p-5  rounded b-shadow bg-white">
            <form className="flex flex-col space-y-3 w-full">
                <div className=" ">
                    <label htmlFor="email"
                           className="text-sm align-middle	 font-medium text-gray-700 ">E-Mail</label>
                    <input type="email" name="email" className="text-sm rounded p-2 w-full bg-blueGray-100"
                           placeholder="jone@example.com"/>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" name="password" className="text-sm rounded p-2 w-full bg-blueGray-100"
                           placeholder="********"/>
                </div>
                <div>

                </div>
                <button className="bg-emerald-400 p-1.5 rounded uppercase text-white font-semibold">login</button>
                <p className="block text-sm text-gray-700">Forgot Password?</p>
                <hr/>
                <span>or create a new account</span>


                <button className="bg-blue-400 p-1.5 rounded uppercase text-white font-semibold">Sign Up</button>
            </form>

        </div>
    );
}

export default SignIn;
