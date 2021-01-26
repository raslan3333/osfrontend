import OsNavbar from "./components/OsNavbar";
import OsContent from "./components/OsContent";
import OsFooter from "./components/OsFooter";

function App() {
    return (
        <div className="App bg-white min-h-screen flex flex-col gap-4 bg-blueGray-50">
            <header>
                <div className=" w-full z-50 bg-white fixed p-2 b-shadow">
                    <OsNavbar/>
                </div>
            </header>
            <div className="mt-28 sm:mt-16 flex-grow">
                <OsContent className="z-0"/>
            </div>
            <footer className="">
                <OsFooter/>
            </footer>
        </div>
    );
}

export default App;
