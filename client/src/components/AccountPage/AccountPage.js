import { Col, Row, Container, Card, Button, Modal, ListGroupItem, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import "./Account.css";
import CreateGroupModal from "../CreateGroupModal";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import {useSearchParams} from "react-router-dom";
export default function AccountPage(props) {

    let[searchParams, setSearchParams] = useSearchParams();
    const [userInfo, setUserInfo] = useState();

    const getAllInformation = async () => {

        const id = searchParams.get("id")
        console.log(id);
        
    }

    

    useEffect(()=>{
        getAllInformation();
    },[])

    const [user, setUser] = useState(temporaryUser);
    const [events, setEvents] = useState(temporaryEvents);
    const [groups, setGroups] = useState(temporaryGroups);

    const [show, setShow] = useState(false);
    const [showGroup, setShowGroup] = useState(false);
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
        setShowGroup(true);
    }
    function handleGroupClose() {
        setShowGroup(false)
    }

    async function handleFindMoreEvents() {
        await axios.get('http://localhost:8080/api/test')
    }

    return (
        <Container>
            <Row>
                <h1>Welcome back!</h1>
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
                                    <Button variant="primary" onClick={handleFindMoreEvents}><Nav.Link as={Link} to="/Events">Find More Events</Nav.Link></Button>
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
                                {groups.map((group, index) => <ListItem item={group} variant={index % 2 === 0 ? 'primary' : 'secondary'} onClick={handleShowCreateGroupModal} />)}
                            </ListGroup>
                            <Card style={{ marginTop: '20px' }}>
                                <Card.Img style={{ height: '200px', objectFit: 'cover' }} variant="top" src="generic-group.jpg" onClick={handleGroupClick} />
                                <Card.ImgOverlay className='d-flex justify-content-around align-items-end'>
                                    <Button variant="success" className="create-gbtn" onClick={handleGroupClick}>Create Group</Button>
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
                    <p className="event-description"><b>Description: </b>{modalEvent}</p>
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
            <Modal show={showGroup} onHide={handleGroupClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Create Group
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="group-popup">
                        <div className="input-fields">
                            <label className="group-label"><b>Group name:</b>
                                <input className="group-name-input" type="text" />
                            </label>
                            <div className="category-dropBox"><b>Group Category:</b>
                                <select name="category-items">
                                    <option value="physical">Physical</option>
                                    <option value="leisure">Average</option>
                                    <option value="art-craft">Arts & Crafts</option>
                                    <option value="games">Games</option>
                                    <option value="nature">Nature</option>
                                </select>
                            </div>
                        </div>
                        <div className="description">
                            <label className="label-description"><b>Group Description:</b></label>
                            <textarea className="description-text"
                                rows="2"
                            />
                        
                        </div>
                        
                    </div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="success" onClick={handleGroupClose}>
                        Confirm Group
                    </Button>
                    <Button variant="secondary" onClick={handleGroupClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

const temporaryGroups = [
    'Knitting',
    'Speed Walking',
    'Bird Watching',
    'Bike Club'
 
]

const temporaryEvents = [
    'DND Night w/ Nathan',
    'Zoomba Granny Night',
    'Fruit Snack Connoissuer Night',
    'Coffee with the Boys',
    'Algorithm Club w/ Prof. Cooper',
    'Emboridery Club #22',
    'Aarons Corn Convention',
    'New iPhone midnight release',
    'Hydration Nation',
    'KC Hike Club',
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