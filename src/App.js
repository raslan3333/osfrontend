

import OsNavbar from "./components/OsNavbar";

import OsContent from "./components/OsContent";
import OsFooter from "./components/OsFooter";
import React from "react";
import {Layout} from "antd";


function App() {
    return (
        <div className="App bg-white min-h-screen flex flex-col">
                <div className=" w-full bg-white fixed border-b-2 border-blue-500 p-3.5 b-shadow" >
                    <header>
                        <OsNavbar />
                    </header>
                </div>
                <div className="flex mt-6 justify-center flex-grow" >
                    <div className=' lg:max-w-screen-2xl' >
                        <OsContent className=""/>
                    </div>

                </div>
            <footer className=" ">
                <OsFooter />
            </footer>

        </div>
    );
}

export default App;
