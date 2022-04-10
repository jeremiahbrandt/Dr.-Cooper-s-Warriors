import { Col, Row, Container, Card, Button, Modal, ListGroupItem, ListGroup } from "react-bootstrap";
import { useState } from "react";
import ListItem from "./ListItem";
import "./Account.css";
import CreateGroupModal from "../CreateGroupModal";
import axios from "axios";
import {  Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
export default function AccountPage() {
    const [user, setUser] = useState(temporaryUser)
    const [events, setEvents] = useState(temporaryEvents);
    const [groups, setGroups] = useState(temporaryGroups);

    const [show, setShow] = useState(false);
    const [modalEvent, setModalEvent] = useState();

    const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
    function handleShowCreateGroupModal() {
        setShowCreateGroupModal(true)
    }
    function handleHideCreateGroupModal() {
        setShowCreateGroupModal(false)
    }
    function handleClose() {
        setShow(false)
    }
    //Event Popup
    function handleShow(event) {
        setShow(true);
        setModalEvent(event);
    }
    //Group Popup
    function handleGroupClick(event) {
        setShow(true);
        setModalEvent(event);
    }
    function handleGroupClose(){
        setShow(false)
    }

    async function handleFindMoreEvents() {
        await axios.get('http://localhost:8080/api/test')
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
                                    <Button variant="primary"  onClick={handleFindMoreEvents}><Nav.Link as={Link} to="/Events">Find More Events</Nav.Link></Button>
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
                                {groups.map((group, index) => <ListItem item={group} variant={index % 2 === 0 ? 'primary' : 'secondary'}onClick={handleShowCreateGroupModal} />)}
                            </ListGroup>
                            <Card style={{ marginTop: '20px' }}>
                                <Card.Img style={{ height: '200px', objectFit: 'cover' }} variant="top" src="generic-group.jpg"onClick={handleGroupClick} />
                                <Card.ImgOverlay className='d-flex justify-content-around align-items-end'>
                                    <Button variant="success"onClick={handleGroupClick}>Create Group</Button> 
                                    <Button variant="primary"><Nav.Link as={Link} to="/Groups">Find More Group</Nav.Link></Button>
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
            {/*  */}
            <Modal show={show} onHide={handleGroupClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalEvent}
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="danger" onClick={handleGroupClose}>
                        Cancel Reservation
                    </Button>
                    <Button variant="secondary" onClick={handleGroupClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <CreateGroupModal show={showCreateGroupModal} handleClose={handleHideCreateGroupModal} />
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


{/* <Modal.Body>
                    <p className="time-date"><b>Group ID: </b>{modalEvent}</p>
                    <p className="location"><b>Group Description: </b>{modalEvent}</p>
                    <p className="description"><b>Group Name: </b>{modalEvent}</p>
                    <h5 className="num-inter">Group:{modalEvent}</h5>
                </Modal.Body> */}