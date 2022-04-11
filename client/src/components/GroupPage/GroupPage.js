import React from "react"
import { Col, Row, Card, Modal, ListGroupItem, ListGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Posts from './Posts'
import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import "./CreateEvent.css";
export default function GroupPage(props) {
    let [searchParams, setSearchParams] = useSearchParams();
    const [group, setGroup] = useState()
    const img_urls = ["physical.jpg", "leisure.jpg","arts_and_crafts.jpg", "games.jpg", "nature.jpg"]

    useEffect(() => {
        getAllGroups()
    }, [])

    const [show, setShow] = useState(false);
    const [showGroup, setShowGroup] = useState(false);
    const [event, setEvent] = useState({
        date: new Date(),
        time: undefined,
        lat: 0,
        log: 0,
        address: "",
        name: "",
        description: "",
        imageUrl: "",
        groupId: undefined
    });

    const getAllGroups = async () => {
        const id = searchParams.get("id")
        console.log(id)
        const groups = (await axios.get(`http://localhost:8080/api/group?id=${id}`)).data
        setGroup(groups)
        setEvent({ ...event, groupId: groups.group_id })
    }

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

    async function handleCreateEvent() {
        const { name, description, lat, log, groupId, date, time, address } = event
        const eventId = getRandomInt(1, 100000)
        // console.log("name", name, "description", description, "lat", lat, "log", log, "groupId", groupId, "date", date, "time", time, "address", address)
        const json = JSON.stringify({
            name,
            lat,
            log,
            address,
            imageUrl: "",
            groupId,
            date,
            userId: 1,
            description,
            eventId
        });
        const res = await axios.post('http://localhost:8080/api/events', json, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        });
        setShow(false)
    }

    return (
        <Container>
            <Flex>
                <GroupName as="h1">{group?.group_name}</GroupName>
                <Image>
                    <img src={img_urls[parseInt(group?.category.cat_id) -1]} />
                </Image>
            </Flex>
            <Bio as="p">{group?.group_description}
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
                        <label className="event-name-label"><b>Event Name:</b>
                            <input
                                className="group-name-input"
                                type="text"
                                value={event.name}
                                onChange={(e) => setEvent({ ...event, name: e.target.value })}
                            />
                        </label>
                        <div className="event-address">
                            <label className="event-address-label"><b>Event Address:</b></label>
                            <textarea
                                className="event-address-text"
                                value={event.address}
                                onChange={(e) => setEvent({ ...event, address: e.target.value })}
                                rows="2"
                            />
                        </div>
                        <label className="event-date-label"><b>Event Date:</b>
                            <input
                                className="group-date-input"
                                type="Date"
                                value={event.date}
                                onChange={(e) => setEvent({ ...event, date: e.target.value })}
                            />
                        </label>
                        <label className="event-time-label"><b>Group Time:</b>
                            <input
                                className="group-time-input"
                                type="time"
                                value={event.time}
                                onChange={(e) => setEvent({ ...event, time: e.target.value })}
                            />
                        </label>
                        <div className="event-description">
                            <label className="event-description-label"><b>Group Description:</b></label>
                            <textarea
                                className="event-description-text"
                                rows="2"
                                value={event.description}
                                onChange={(e) => setEvent({ ...event, description: e.target.value })}
                            />
                        </div>
                        <label className="event-lat-label"><b>Area Latitude:</b>
                            <input
                                className="group-lat-input"
                                type="text"
                                value={event.lat}
                                onChange={(e) => setEvent({ ...event, lat: e.target.value })}
                            />
                        </label>
                        <label className="event-long-label"><b>Area Longitude:</b>
                            <input
                                className="group-long-input"
                                type="text"
                                value={event.log}
                                onChange={(e) => setEvent({ ...event, log: e.target.value })}
                            />
                        </label>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-between">
                        <Button variant="success" onClick={handleCreateEvent}>
                            Create Event
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
    display: flex;
    padding-bottom:30px;
    justify-content: center;
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}