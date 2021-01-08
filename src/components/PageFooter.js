import React from 'react';
import {Col, Dropdown, FlexboxGrid, Grid, List, Nav, Navbar, Panel, Row} from "rsuite";

const PageFooter = () => {
    const data = ['Roses are red', 'Violets are blue', 'Sugar is sweet', 'And so are you'];
    const listStyle = {
        boxShadow: 'none',
        background: '#42598c',
        color: 'white',
    }
    const pageFooterStyle = {
        background: '#42598c',
        color: 'white',
        width: '100%',
    }
    const colWidth = {
        maxWidth: '100rem',

    }


    return (
        <FlexboxGrid style={pageFooterStyle} fluid  justify="center">
            <FlexboxGrid.Item componentClass='div' style={colWidth} colspan={24} xs={24} sm={24} md={24} lg={24} >

                    <Grid fluid>
                        <Row  className="show-grid">
                            <Col xs={24} sm={24} md={6}>
                                <Panel >
                                    <List style={listStyle} size='sm' >
                                        <h4>Title</h4>
                                        {data.map((item, index) => (
                                            <List.Item style={listStyle} key={index} index={index}>
                                                {item}
                                            </List.Item>
                                        ))}
                                    </List>
                                </Panel>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Panel >
                                    <List size='sm' style={listStyle}>
                                        <h4>Title</h4>

                                        {data.map((item, index) => (
                                            <List.Item style={listStyle} key={index} index={index}>
                                                {item}
                                            </List.Item>
                                        ))}
                                    </List>
                                </Panel>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Panel>
                                    <List size='sm' style={listStyle}>
                                        <h4>Title</h4>

                                        {data.map((item, index) => (
                                            <List.Item style={listStyle} key={index} index={index}>
                                                {item}
                                            </List.Item>
                                        ))}
                                    </List>
                                </Panel>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Panel >
                                    <List size='sm' style={listStyle}>
                                        <h4>Title</h4>

                                        {data.map((item, index) => (
                                            <List.Item style={listStyle} key={index} index={index}>
                                                {item}
                                            </List.Item>
                                        ))}
                                    </List>
                                </Panel>
                            </Col>

                        </Row>
                    </Grid>

            </FlexboxGrid.Item>
        </FlexboxGrid>
    );
}

export default PageFooter;
