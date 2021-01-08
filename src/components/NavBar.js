import React, {Component} from "react";
import '../index.css';
import {Col, Dropdown, FlexboxGrid, Grid, Nav, Navbar, Row} from "rsuite";
import Menu from "./iconComponents/Menu";
import User from "./iconComponents/User";
import Cart from "./iconComponents/075ShoppingCart";
import Heart from "./iconComponents/045Heart";
import Search from "./iconComponents/Search";


class NavBar extends Component {
    render() {
        /*        const navbarBrand = {
                    padding: '18px 20px',
                    display: 'inline-block'
                }*/
        const colWidth = {
            maxWidth: '1550px',
        }
        return (

            <Navbar style={{padding: '5px'}} appearance="inverse">
                <FlexboxGrid fluid justify="center">
                    <FlexboxGrid.Item componentClass='div' style={colWidth} colspan={24} xs={24} sm={24} md={24}
                                      lg={24}>
                        <Grid fluid>
                            <Row className="show-grid">
                                <Col lg={9}>
                                    <Navbar.Header>
                                        <Nav>
                                            <Nav.Item eventKey="1">
                                                <Menu style={{width: '22px', height: '22px'}}/>
                                            </Nav.Item>
                                        </Nav>
                                    </Navbar.Header>
                                </Col>
                                <Col lg={6}>
                                    <Nav>
                                        <div style={{margin: '1rem', fontSize: '20pt'}}>Online Shop</div>
                                    </Nav>
                                </Col>
                                <Col lg={9}>
                                    <Navbar.Body>

                                        <Nav pullRight>
                                            <Nav.Item eventKey="1">
                                                <Search style={{width: '22px', height: '22px'}}/>
                                            </Nav.Item>
                                            <Nav.Item eventKey="1">
                                                <Heart style={{width: '22px', height: '22px'}}/>
                                            </Nav.Item>
                                            <Nav.Item eventKey="1">
                                                <Cart style={{width: '22px', height: '22px'}}/>
                                            </Nav.Item>
                                            <Nav.Item eventKey="1">
                                                <User style={{width: '22px', height: '22px'}}/>
                                            </Nav.Item>

                                            <Dropdown title="About">
                                                <Dropdown.Item eventKey="4">Company</Dropdown.Item>
                                                <Dropdown.Item eventKey="5">Team</Dropdown.Item>
                                                <Dropdown.Item eventKey="6">Contact</Dropdown.Item>
                                            </Dropdown>
                                        </Nav>
                                    </Navbar.Body>

                                </Col>
                            </Row>
                        </Grid>

                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Navbar>


        );
    }
}

export default NavBar;




