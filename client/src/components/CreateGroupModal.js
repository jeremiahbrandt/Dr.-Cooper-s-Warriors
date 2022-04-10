import { Col, Row, Container, Card, Button, Modal, ListGroupItem, ListGroup } from "react-bootstrap";
// import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import "./CreateGroupModal.css"
export default function CreateGroupModal(props) {
    const { show, handleClose, modalEvent } = props

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Group</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label className="label-group">Enter Group name:
                    <input type="text" />
                </label>
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
    )
}