import React from "react";
import {Button, Form, FormControl, Nav, NavDropdown, Navbar} from "react-bootstrap";

const LogIn = () => {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Navbar.Text >
                <a href={"/signup"}>Forget Password?</a>
            </Navbar.Text>
            <Button variant="primary" type="login" href={"/userhomepage"}>
                Log In
            </Button>
            <Button variant="primary" type="cancel" href={"/home"}>
                Cancel
            </Button>
        </Form>
    );
}
export default LogIn;