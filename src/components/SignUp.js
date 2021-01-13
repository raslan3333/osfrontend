import illustration from "../Illustration.png";
import {AutoComplete, Button, Form, Input} from "antd";
import User from "./iconcomponents/outline/User";

const SignUp = () => {
    return (
        <div className="grid grid-cols-2 p-5 mr-4 rounded shadow-md">
            <div >
                <div className="font-bold text-xl text-blueGray-600">
                    Create An Account
                </div>

            </div>
            <img src={illustration} alt="image" className="col-span-1"/>
        </div>
    );
}

export default SignUp;
