

import OsNavbar from "./components/OsNavbar";

import OsContent from "./components/OsContent";
import OsFooter from "./components/OsFooter";
import React from "react";



function App() {
    return (
        <div className="App bg-white min-h-screen flex flex-col bg-blueGray-50">
                <div className=" w-full z-50 bg-white fixed  p-3.5 b-shadow" >
                    <header>
                        <OsNavbar />
                    </header>
                </div>

                    <div className="mt-6 flex-grow" >
                        <OsContent className="max-w-screen-2xl mt-6 z-0"/>

                    </div>

            <footer className=" ">
                <OsFooter />
            </footer>

        </div>
    );
}

export default App;
