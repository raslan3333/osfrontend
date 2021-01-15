import illustration from "../Illustration.png";
import {AutoComplete, Button, Form, Input} from "antd";
import User from "./iconcomponents/outline/User";

const SignUp = () => {
    return (
        <div className="grid grid-cols-2 p-5 gap-2 rounded b-shadow bg-white border border-gray-100">
            <form className="flex flex-col space-y-4 w-full">
                <div className="font-bold text-xl text-blueGray-600">
                    Create An Account
                </div>

                <div className="flex justify-between">
                    <div className="mr-3">
                        <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input name="firstname" className="text-sm rounded  p-2 w-full bg-blueGray-100" placeholder="first name"/>
                    </div>
                    <div>
                        <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input name="lastname" className="text-sm rounded p-2 w-full bg-blueGray-100" placeholder="last name"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
                    <input name="email" className="text-sm rounded p-2 w-full bg-blueGray-100" placeholder="jone@example.com"/>
                </div>

                <button className="bg-emerald-400 p-1.5 rounded uppercase text-white font-semibold">Sign Up</button>
            </form>
            <img src={illustration} alt="image" className="col-span-1"/>
        </div>
    );
}

export default SignUp;
