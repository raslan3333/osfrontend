import {useState} from "react";


const DropDown = (props) => {
    const def = props.def
    const trigger = props.trigger;
    const [isOpen, setIsOpen] = useState(true)
    const open = "transition ease-out duration-100 transform opacity-100 scale-100"
    const close ="transition ease-in duration-75 transform opacity-0 scale-95"
    let [dropClass, setDropClass] =useState(close);
    const  handleClick= ()=> {
        setIsOpen(!isOpen);
        if (isOpen) {
            setDropClass(open);
        } else {
            setDropClass(close);
        }
    }
    const  onMouseL= ()=> {
            setDropClass(close);
        setIsOpen(true);
    }
    return (
        <div >
            <div  className="relative inline-block text-left">
                <div>
                    <button type="button"  onClick={handleClick}
                            className={`inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-400`}
                            id="options-menu" aria-haspopup="true" aria-expanded="true">

                        {def}
                    </button>
                </div>

                <div onMouseLeave={onMouseL} onClick={onMouseL} className={`origin-top-right absolute right-0 mt-1 w-12 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${dropClass}`}>
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {props.children}
                    </div>
                </div>

            </div>
        </div>
            );


}

export default DropDown;
