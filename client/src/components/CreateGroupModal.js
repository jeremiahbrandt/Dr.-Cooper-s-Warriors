import { Col, Row, Container, Card, Button, Modal, ListGroupItem, ListGroup } from "react-bootstrap";
import { useState } from "react"

export default function CreateGroupModal(props) {
    const { show, handleClose, modalEvent } = props

    return (
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
    )
}