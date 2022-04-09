import { Col, Row, Container, Card, Button, Modal, ListGroupItem, ListGroup } from "react-bootstrap";
import { useState } from "react";
import ListItem from "./ListItem";
import "./Account.css";

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
                                <Card.Img style={{ height: '200px', objectFit: 'cover' }} variant="top" src="generic-event.jpg" />
                                <Card.ImgOverlay className='d-flex justify-content-around align-items-end'>
                                    <Button variant="primary">Find More Events</Button>
                                </Card.ImgOverlay>
                            </Card>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header as="h5">Your Groups</Card.Header>
                        <Card.Body>
                            <ListGroup style={{ height: '400px', overflowY: 'scroll' }}>
                                {groups.map((group, index) => <ListItem item={group} variant={index % 2 === 0 ? 'primary' : 'secondary'} onClick={handleGroupClick} />)}
                            </ListGroup>
                            <Card style={{ marginTop: '20px' }}>
                                <Card.Img style={{ height: '200px', objectFit: 'cover' }} variant="top" src="generic-group.jpg" />
                                <Card.ImgOverlay className='d-flex justify-content-around align-items-end'>
                                    <Button variant="success">Create Group</Button> 
                                    <Button variant="primary">Find More Groups</Button>
                                </Card.ImgOverlay>
                            </Card>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalEvent}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="time-date"><b>Event Info: </b>{modalEvent}</p>
                    <p className="location"><b>Event Location: </b>{modalEvent}</p>
                    <p className="description"><b>Description: </b>{modalEvent}</p>
                    <h5 className="num-inter">People interested:{modalEvent}</h5>
                </Modal.Body>

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