import { Col, Row, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './RegistrationPage.css';
import axios from 'axios';
import GoogleLogin from "react-google-login";

export default function Registration(props) {
    function responseFailureGoogle() {
    }

    return (
        <Container className='w-50'>
            <Row className='form-holder'>
                <Col className="text-info">
                    <Form.Text className="text-intro-top">
                        Sign up to "CoolApp"
                    </Form.Text>
                    <Form.Text className="text-intro-sub">
                        It's fast and simple!
                    </Form.Text>
                </Col>
                <Row className="google-holder">
                <GoogleLogin
                    clientId="752684579731-51ocrrorqh65rjvdh7mmg9kqrsj7i68q.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={props.refreshTokenSetup}
                    onFailure={responseFailureGoogle}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
                </Row>
                <Row className="dash-holder">
                    <h1 className="dashline">or</h1>
                    <label className='dashline-under'>Sign up with your email</label>
                </Row>
                <Col className="mb-3-holder">
                    <Row className="mb-3" controlId="registrationFormFirstName">
                        <Form.Control type="text" placeholder="Enter first name" />
                    </Row>
                    <Row className="mb-3" controlId="registrationFormLasttName">
                        <Form.Control type="text" placeholder="Enter last name" />
                    </Row>
                    <Row className="mb-3" controlId="registrationFormEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Row>
                    <Row className="mb-3" controlId="registrationFormPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Row>
                    <Row className="mb-3" controlId="registrationFormBirthday">
                        <Form.Control type="date" name='date_of_birth'/>
                    </Row>
                </Col><Button className="register-button" variant="primary" type="submit">Submit</Button>
            </Row>
            
        </Container>
    )
}