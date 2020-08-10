import {Button, Form} from "react-bootstrap";
import React from "react";

const SignUp = () => {
    return (
        <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" placeholder="Enter last name" />
            </Form.Group>
            <Form.Group controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="Enter first name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" href={"/userhomepage"}>
                Submit
            </Button>
        </Form>
    );
}
export default SignUp;