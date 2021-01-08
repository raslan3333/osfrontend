// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Navbar from "./components/NavBar";
import {Container, Content, Footer, Header} from 'rsuite';
import ContentBody from "./components/ContentBody";
import PageFooter from "./components/PageFooter";


function App() {
    const footerStyle = {
        position: 'static',
        left: 0,
        bottom: 0,
        width: '100%',
        color: 'white',
    }
    const containerStyle = {
        height: '100vh',
    }

    return (
        <div>
            <Container style={containerStyle}>
                <Header><Navbar/></Header>
                <Content><ContentBody/></Content>

                <Footer style={footerStyle}><PageFooter/></Footer>
            </Container>

        </div>
    );
}

export default App;
