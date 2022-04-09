import { useState } from "react";
import { Col, Row, Container, Card, Button, Modal, ListGroupItem, ListGroup, Image } from "react-bootstrap";
import GroupListItem from "./GroupListItem";
import CatBox from "../CatBox"

export default function GroupsPage() {
    const [groups, setGroups] = useState(temporaryGroups);

    function handleClick() {

    }

    return (
        <div>
            <Card>
                <Card.Header as="h5">Find Groups</Card.Header>
                <Card.Body>
                    <CatBox />
                    <ListGroup style={{ maxHeight: '40rem', overflowY: 'scroll' }}>
                        {groups.map((group, index) => <GroupListItem item={group} variant={index % 2 === 0 ? 'primary' : 'secondary'} onClick={handleClick} />)}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

const temporaryGroups = [
    {
        name: "Group 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Tristique senectus et netus et",
        size: "5",
        category: "Physical",
        imageUrl: '/physical.jpg'
    },
    {
        name: "Group 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Tristique senectus et netus et",
        size: "3",
        category: "Leisure",
        imageUrl: '/leisure.jpg'
    },
    {
        name: "Group 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Tristique senectus et netus et",
        size: "12",
        category: "Arts and Crafts",
        imageUrl: 'arts_and_crafts.jpg'
    },
    {
        name: "Group 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Tristique senectus et netus et",
        size: "5",
        category: "Games",
        imageUrl: 'games.jpg'
    },
    {
        name: "Group 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Tristique senectus et netus et",
        size: "3",
        category: "Nature",
        imageUrl: '/nature.jpg'
    }
]