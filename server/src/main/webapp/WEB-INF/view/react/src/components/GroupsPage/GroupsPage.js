import { useState, useEffect } from "react";
import { Card, Container, ListGroup } from "react-bootstrap"
import GroupListItem from "./GroupListItem"
import CatBox from "../CatBox"
import { useGroups } from "../../hooks/useGroups"
import GroupPage from "../GroupPage/GroupPage"

export default function GroupsPage() {
    const { filters, groups, handleClick, toggleFilter } = useGroups()

    return (
        
        <Container >
            
            <Card > 
            
                <Card.Header as="h5">Find Groups</Card.Header>
                <Card.Body>
                    <CatBox
                        filters={filters}
                        toggleFilter={toggleFilter}
                    />
                    <ListGroup style={{ maxHeight: '40rem', overflowY: 'scroll' }}>
                        {groups.map((group, index) => <GroupListItem item={group} variant={index % 2 === 0 ? 'primary' : 'secondary'} onClick={handleClick} />)}
                    </ListGroup>
                </Card.Body>
               
            </Card>
            
        </Container>
    )
}