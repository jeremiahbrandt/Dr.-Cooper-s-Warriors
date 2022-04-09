import { Col, Row, Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { useState } from "react";

export default function AccountPage() {
    const [events, setEvents] = useState(temporaryEvents);
    const [groups, setGroups] = useState(temporaryGroups);

    return (
        <Container>
            <Row>

                <h1>Account Page</h1>
            </Row>
            <Row>

                <Col>
                    <h2>Upcoming Events</h2>
                    <ListGroup>
                        {events.map(event => <ListGroup.Item>{event}</ListGroup.Item>)}
                    </ListGroup>
                </Col>
                <Col>
                    <h2>Your Groups</h2>
                    <ListGroup>
                        {groups.map(group => <ListGroup.Item>{group}</ListGroup.Item>)}
                    </ListGroup>
                </Col>
            </Row>
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