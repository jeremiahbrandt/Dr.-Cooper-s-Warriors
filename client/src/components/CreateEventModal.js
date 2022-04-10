import { Col, Row, Container, Card, Button, Modal, ListGroupItem, ListGroup, Form } from "react-bootstrap";
import { useState } from "react"

export default function CreateEventModal(props) {
    const { show, handleClose, modalEvent } = props

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{modalEvent}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Event Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="location" placeholder="Latitude" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="Location">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Longitude" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Location">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Longitude" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>

                </Form>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}