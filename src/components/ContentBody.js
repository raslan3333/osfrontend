import React from 'react';
import {Carousel, Col, Dropdown, FlexboxGrid, Grid, Icon, Nav, Navbar, Panel, Row} from "rsuite";
import SignUp from "./SignUp";
import almonds from "../images/almonds-768699_1280.jpg";
import menu from "../images/menu_banner1.jpg";
import slider from "../images/slider.jpg";
import banner from "../images/shop_banner_img1.jpg";
import toner from "../images/toner-906142_1280.webp";


const ContentBody = () => {
    const panelStyles = {
/*        margin: '20px',*/
    }
    const colWidth = {
        maxWidth: '1550px',

    }
    return (
        <FlexboxGrid fluid  justify="center">
            <FlexboxGrid.Item componentClass='div' style={colWidth} colspan={24} xs={24} sm={24} md={24} lg={24} >
                <div>
                    <Grid fluid>
                        <Row className="show-grid">
                            <Col xs={24} >
                                <Nav>
                                    <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
                                    <Nav.Item>News</Nav.Item>
                                    <Nav.Item>Solutions</Nav.Item>
                                    <Nav.Item>Products</Nav.Item>
                                    <Nav.Item>About</Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={24} >
                                <Carousel  className="custom-slider">

                                    <img src={slider} />
                                    <img src={almonds} />
                                    <img src={toner} />

                                </Carousel>
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col xs={8} >
                                <Panel style={panelStyles} bordered>
                                    <SignUp/>
                                </Panel>

                            </Col>

                            <Col  xs={16} >
                                <Panel  style={{background:'#FEF3C7', height: '30vh'}} >

                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </FlexboxGrid.Item>
        </FlexboxGrid>

    );
}

export default ContentBody;
