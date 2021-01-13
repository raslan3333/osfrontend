

import OsNavbar from "./components/OsNavbar";

import OsContent from "./components/OsContent";
import OsFooter from "./components/OsFooter";
import React from "react";
import {Layout} from "antd";


function App() {
    return (
        <div className="App bg-white ">

                <div className="flex justify-center border-b-2 border-blue-500 p-3.5 " >
                    <header className='w-screen' >
                        <OsNavbar />
                    </header>
                </div>
                <div className="flex justify-center " >
                    <div className=' lg:max-w-screen-2xl' >
                        <OsContent className=""/>
                    </div>

                </div>
            <OsFooter/>
        </div>
    );
}

export default App;
