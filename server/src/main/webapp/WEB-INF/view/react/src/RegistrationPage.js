import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'
import axios from 'axios'

export default function Registration() {
    function handleSubmit(e) {
        e.preventDefault()
        // TODO: Call api
        // axios.post(/api/)
    }

    return (
        <Container className='w-50'>
            <Form>
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
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control type="date" name='date_of_birth' />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}