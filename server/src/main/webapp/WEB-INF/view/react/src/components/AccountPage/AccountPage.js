import { Col, Row, Container, Card, Button, Modal, ListGroupItem } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { useState } from "react";
import ListItem from "./ListItem";

export default function AccountPage() {
    const [user, setUser] = useState(temporaryUser)
    const [events, setEvents] = useState(temporaryEvents);
    const [groups, setGroups] = useState(temporaryGroups);

    const [show, setShow] = useState(false);
    const [modalEvent, setModalEvent] = useState();

    function handleClose() {
        setShow(false)
    }

    function handleShow(event) {
        setShow(true);
        setModalEvent(event);
    }

    function handleGroupClick(group) {
        window.location.href = `/groups/${group}`;
    }

    return (
        <Container>
            <Row>
                <h1>Welcome back {user.firstName}!</h1>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h5">Upcoming Events</Card.Header>
                        <Card.Body>
                            <ListGroup style={{ height: '400px', overflowY: 'scroll' }}>
                                {events.map((event, index) => <ListItem item={event} variant={index % 2 === 0 ? 'primary' : 'secondary'} onClick={handleShow} />)}
                            </ListGroup>
                            <Card style={{ marginTop: '20px' }}>
                                <Card.Img style={{ height: '200px' }} variant="top" src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" />
                                <ListGroup className="list-group-flush">
                                    <Button variant="primary">Find More Events</Button>
                                </ListGroup>
                            </Card>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header as="h5">Your Groups</Card.Header>
                        <Card.Body>
                            <ListGroup style={{ height: '400px', overflowY: 'scroll' }}>
                                {events.map((event, index) => <ListItem item={event} variant={index % 2 === 0 ? 'primary' : 'secondary'} onClick={handleShow} />)}
                            </ListGroup>
                            <Card style={{ marginTop: '20px' }}>
                                <Card.Img style={{ height: '200px' }} variant="top" src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" />
                                <Row>
                                    <Col>
                                        <Button variant="success">Create Group</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Find More Groups</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Card.Body>
                        {/* <Card.Body>
                            <ListGroup style={{ height: '500px', overflowY: 'scroll' }}>
                                {groups.map((group, index) => <ListItem item={group} variant={index % 2 === 0 ? 'light' : 'info'} onClick={handleGroupClick} />)}
                            </ListGroup>
                            <Container>
                                <Row>
                                    <Col>
                                        <Button variant="success">Create Group</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Find More Groups</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body> */}
                    </Card>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalEvent}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="danger" onClick={handleClose}>
                        Cancel Reservation
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

const temporaryGroups = [
    'Group 1',
    'Group 2',
    'Group 3',
    'Group 4',
    'Group 5',
    'Group 6',
    'Group 7',
    'Group 8',
    'Group 9',
    'Group 10',
    'Group 11',
    'Group 12',
    'Group 13',
    'Group 14',
    'Group 15',
    'Group 16',
    'Group 17',
    'Group 18',
]

const temporaryEvents = [
    'Event 1',
    'Event 2',
    'Event 3',
    'Event 4',
    'Event 5',
    'Event 6',
    'Event 7',
    'Event 8',
    'Event 9',
    'Event 10',
    'Event 11',
    'Event 12',
    'Event 13',
    'Event 14',
    'Event 15',
    'Event 16',
    'Event 17',
    'Event 18',
    'Event 19',
    'Event 20',
    'Event 21',
    'Event 22',
    'Event 23',
    'Event 24',
    'Event 25',
    'Event 26',
    'Event 27',
    'Event 28',
    'Event 29',
]

const temporaryUser = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@mail.com'
}