import React from "react"
import { Col, Row, Card, Modal, ListGroupItem, ListGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Posts from './Posts'
import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import CreateEventModal from "../CreateEventModal"
import "./CreateEvent.css";
export default function GroupPage(props) {
    const { id } = useParams();
    useEffect(() => {
    }, [])

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
    }
    //Group Popup
    function handleGroupClick(event) {
        setShowGroup(true);
    }
    function handleGroupClose() {
        setShowGroup(false)
    }
    return (

        <Container>
            <Flex>
                <GroupName as="h1">Morning Yoga</GroupName>
                <Image>
                    <img src="rex.jpg" />
                </Image>
            </Flex>
            {/* <Bio as="p">{}</Bio> */}
            <Bio as="p">In the yogic discipline, the morning is considered as a “divine time” and when an individuals spiritual energy is at its peak.
                This is a group that meets at 6 in the morning to do yoga and connect with ourselfs. Everyone is welcome to join.
            </Bio>
            <Push>
                <Button variant="primary" type="submit" onClick={handleShow}>Create Event</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Create Event
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label className="event-name-label"><b>Group Name:</b>
                            <input className="group-name-input" type="text" />
                        </label>
                        <div className="event-address">
                            <label className="event-address-label"><b>Event Address:</b></label>
                            <textarea className="event-address-text"
                                rows="2"
                            />
                        </div>
                        <label className="event-date-label"><b>Group Date:</b>
                            <input className="group-date-input" type="Date" />
                        </label>
                        <label className="event-time-label"><b>Group Time:</b>
                            <input className="group-time-input" type="time" />
                        </label>
                        <div className="event-description">
                            <label className="event-description-label"><b>Group Description:</b></label>
                            <textarea className="event-description-text"
                                rows="2"
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-between">
                        <Button variant="success" onClick={handleClose}>
                            Cancel Reservation
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Push>

            <PostBody>

                <Posts posts={tempPosts} />
            </PostBody>
        </Container>





    )
}

const Container = styled.div`
    width:60%;
    margin: 0 auto;
    font-size: 1em;
`
const Flex = styled.div`
    flex-direction: column;
`
const GroupName = styled.h1`
    font-weight: bold;
`
const Image = styled.div`
`
const Bio = styled.p`
    padding: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    line-height: 1.25em;
`
const Push = styled.div`
    padding-bottom:30px;
`
const PostBody = styled.div`
`

const tempPosts = [
    {
        id: 1,
        name: 'Betty',
        image: "person10.jpg",
        post: "This group is open for anyone to join and ask questions about yoga"
    },
    {
        id: 2,
        name: 'Annie',
        image: "person3.jpg",
        post: "I love the atmosphere, the people and the awesome workouts!"
    },
    {
        id: 3,
        name: 'Sam',
        image: "person1.jpg",
        post: "This class has really helped my back, would recommend"
    },
    {
        id: 4,
        name: 'Bob Jr.',
        image: "person9.jpg",
        post: "I absolutely love this studio! It has changed my life and yoga practice. Love classes with Emily, Cat, Bailee, Ryan, and Tiffany! But seriously, they're all amazing. 10/10 recommend."
    },
    {
        id: 5,
        name: 'Loraine',
        image: "image8.jpg",
        post: "Great locations, good variety of classes and excellent teachers."
    }

]