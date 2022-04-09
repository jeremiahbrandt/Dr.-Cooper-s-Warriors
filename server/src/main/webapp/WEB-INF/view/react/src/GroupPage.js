import React from "react"
import Button from 'react-bootstrap/Button'
import Posts from './components/Posts'
import styled from "styled-components"


export default function groupPage(){
    return(
        
    <Container>
        <Flex>
        <GroupName as="h1">Group Name</GroupName>
        <Image>
            <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=35"/>
        </Image>
        </Flex>
        <Bio as="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. </Bio>
        <Push>
            <Button variant="primary" type="submit">Create Event</Button>
        </Push>

        <PostBody>
            <Posts posts={tempPosts} />
        </PostBody>
        
    </Container>
        


        
    
    )
}

const Container = styled.div`
    padding: 10px;
    margin: 20px;
    font-size: 1.2em;
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
        name: 'Bob',
        image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=35",
        post: "Hello, my name is Bob and I like this club a lot. Can't wait for the next meeting!sLorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus."
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