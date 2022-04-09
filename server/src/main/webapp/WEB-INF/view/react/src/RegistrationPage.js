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
                        <button type="submit" className="app-signIn"> Sign In with Google</button>
                </div>
                </Row>

                <Row className="dash-holder">
                    <h1 className="dashline">or</h1>
                    <Form.Label className='dashline-under'>Sign up with your email</Form.Label>
                </Row>
                
                <Col className="mb-3-holder">
                    <Row className="mb-3" controlId="registrationFormFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" />
                    </Row>
                    <Row className="mb-3" controlId="registrationFormLasttName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                    </Row>
                    <Row className="mb-3" controlId="registrationFormEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Row>
                    <Row className="mb-3" controlId="registrationFormPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Row>
                    <Row className="mb-3" controlId="registrationFormBirthday">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" name='date_of_birth' />
                    </Row>
                    <Button className="register-button" variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            
                <Row className="sub_button">
                    
                </Row>
                
            </Row>
        </Container>
    )
}