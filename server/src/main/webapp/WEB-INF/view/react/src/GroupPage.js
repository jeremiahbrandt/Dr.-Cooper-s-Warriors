import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Posts from './components/Posts'


export default function groupPage(){
    return(
    <Container>
        <div classname="info">
            <h1>Group Name</h1>
                <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=35"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. </p>
            <Button variant="primary" type="submit">Create Event</Button>
        </div>
        <div classname="posts">
            <Posts posts={tempPosts} />
        </div>

        
    </Container>
    )
}


const tempPosts = [
    {
        id: 1,
        name: 'Bob',
        image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=35",
        post: "Hello, my name is Bob and I like this club a lot. Can't wait for the next meeting!s"
    },
    {
        id: 2,
        name: 'Annie',
        image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=35",
        post: "Hello, my name is Bob and I like this club a lot. Can't wait for the next meeting!s"
    },
    {
        id: 3,
        name: 'Sam',
        image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=35",
        post: "Hello, my name is Bob and I like this club a lot. Can't wait for the next meeting!s"
    },
    {
        id: 4,
        name: 'Bob Jr.',
        image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=35",
        post: "Hello, my name is Bob and I like this club a lot. Can't wait for the next meeting!s"
    },
    {
        id: 5,
        name: 'Loraine',
        image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=35",
        post: "Hello, my name is Bob and I like this club a lot. Can't wait for the next meeting!s"
    }

]