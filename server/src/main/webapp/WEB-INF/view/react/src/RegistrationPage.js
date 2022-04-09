import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
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
            <Form className='form-holder'>
                <Form.Group className="text-info">
                    <Form.Text className="text-intro-top">
                        Sign up to CoolApp
                    </Form.Text>
                    <Form.Text className="text-intro-sub">
                        It's fast and simple!
                    </Form.Text>
                </Form.Group>

                <Form.Group className="google-holder">
                <div className='button-Google' >
                        <button type="submit" className="app-signIn"> Sign In with Google</button>
                </div>
                </Form.Group>

                <Form.Group className="dash-holder">
                    <h1 className="dashline">or</h1>
                    <Form.Label className='dashline-under'>Sign up with your email</Form.Label>
                </Form.Group>
                
                <Form.Group className="mb-3-holder">
                    <Form.Group className="mb-3" controlId="registrationFormFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="registrationFormLasttName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="registrationFormEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="registrationFormPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="registrationFormBirthday">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" name='date_of_birth' />
                    </Form.Group>
                </Form.Group>
            
                <Form.Group className="sub_button">
                    <Button className="button" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
                
            </Form>
        </Container>
    )
}