import illustration from "../Illustration.png";
import React, {useState} from 'react';
import Buyer from "./Buyer";
import Seller from "./Seller";
import Store from "./Store";

const SignUp = () => {
    const [component, setComponent] = useState(<Buyer/>);
    const [def, setDef] = useState(true);

    function handleClick(event) {
        const value = event.target.value;
        if (value === 'seller') {
            setComponent(<Seller/>);
            setDef(false);
            return component
        } else if (value === 'store') {
            setComponent(<Store/>);
            setDef(false);
            return component
        } else {
            setComponent(<Buyer/>);
            setDef(true);
            return component;
        }
    }

    return (

        <div className="p-5 gap-2 rounded b-shadow bg-white">
            <div className="order-1 lg:order-2 ">
                <div className="font-bold text-xl text-blueGray-600">
                    Create An Account
                </div>
                <div>
                    <input checked={def} onChange={handleClick} className="mr-1" type="radio" id="male" name="usertype"
                           value="buyer"/>
                    <label className="mr-4" htmlFor="male">Buyer</label>
                    <input onChange={handleClick} className="mr-1" type="radio" id="female" name="usertype"
                           value="seller"/>
                    <label className="mr-4" htmlFor="female">Seller</label>
                    <input onChange={handleClick} className="mr-1" type="radio" id="other" name="usertype"
                           value="store"/>
                    <label className="mr-4" htmlFor="other">Store</label>
                </div>
                <div>{component}</div>
            </div>


        </div>
    );
}

export default SignUp;
