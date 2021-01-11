import {Breadcrumb, Button, Checkbox, Col, Form, Input, Layout, Row} from "antd";
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import OsNavbar from "./components/OsNavbar";
import illustration from './Illustration.png';
import OsContent from "./components/OsContent";
import OsFooter from "./components/OsFooter";
const {Header, Content, Footer} = Layout;

function App() {
    return (
        <div className="App bg-white">
            <Layout className="layout bg-white flex flex-col h-screen justify-between">
                <div className="flex justify-center border-b-2 border-blue-500 p-3.5 " >
                    <header className='w-screen lg:max-w-screen-2xl' >
                        <OsNavbar />
                    </header>
                </div>
                <div className="flex justify-center" >
                    <Content className='w-screen lg:max-w-screen-2xl'>
                        <div className='container' >
                            <OsContent/>
                        </div>
                    </Content>
                </div>
                <div className="flex justify-center" >
                    <Footer className='w-screen lg:max-w-screen-2xl' >
                        <OsFooter/>
                    </Footer>
                </div>
            </Layout>
        </div>
    );
}

export default App;
