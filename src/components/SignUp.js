import React from 'react';
import {Button, ButtonToolbar, ControlLabel, Form, FormControl, FormGroup, HelpBlock} from "rsuite";


const SignUp = () => {


    return (
        <Form>
            <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl name="name" />
                <HelpBlock>Required</HelpBlock>
            </FormGroup>
            <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl name="email" type="email" />
                <HelpBlock tooltip>Required</HelpBlock>
            </FormGroup>
            <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl name="password" type="password" />
            </FormGroup>
            <FormGroup>
            </FormGroup>
            <FormGroup>
                <ButtonToolbar>
                    <Button appearance="primary">Submit</Button>
                    <Button appearance="default">Cancel</Button>
                </ButtonToolbar>
            </FormGroup>
        </Form>
    );
}

export default SignUp;
