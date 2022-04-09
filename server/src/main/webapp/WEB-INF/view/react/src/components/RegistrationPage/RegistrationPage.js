import { Col, Row, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './RegistrationPage.css';
import axios from 'axios';

export default function Registration() {
    function handleSubmit(e) {
        e.preventDefault()
        // TODO: Call api
        // axios.post(/api/)
    }

    return (
        <Container className='w-50'>
            <Row className='form-holder'>
                <Col className="text-info">
                    <Form.Text className="text-intro-top">
                        Sign up to CoolApp
                    </Form.Text>
                    <Form.Text className="text-intro-sub">
                        It's fast and simple!
                    </Form.Text>
                </Col>

                <Row className="google-holder">
                    <div className='button-Google' >
                            <button type="submit" className="app-signIn">Sign In with Google</button>
                    </div>
                </Row>

                <Row className="dash-holder">
                    <h1 className="dashline">or</h1>
                    <label className='dashline-under'>Sign up with your email</label>
                </Row>
                
                <Col className="mb-3-holder">
                    <Row className="mb-3" controlId="registrationFormFirstName">
                        <label>First name</label>
                        <Form.Control type="text" placeholder="Enter first name" />
                    </Row>
                    <Row className="mb-3" controlId="registrationFormLasttName">
                        <label>Last name</label>
                        <Form.Control type="text" placeholder="Enter last name" />
                    </Row>
                    <Row className="mb-3" controlId="registrationFormEmail">
                        <label>Email address</label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <text className="text-muted">
                        We'll never share your email with anyone else.
                        </text>
                    </Row>
                    <Row className="mb-3" controlId="registrationFormPassword">
                        <label>Password</label>
                        <Form.Control type="password" placeholder="Password" />
                    </Row>
                    <Row className="mb-3" controlId="registrationFormBirthday">
                        <label>Date of Birth</label>
                        <Form.Control type="date" name='date_of_birth' />
                    </Row>
                    <Button className="register-button" variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
                
            </Row>
        </Container>
    )
}