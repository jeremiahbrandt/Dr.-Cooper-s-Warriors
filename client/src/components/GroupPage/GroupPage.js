import React from "react"
import Button from 'react-bootstrap/Button'
import Posts from './Posts'
import styled from "styled-components"
import { useEffect , useState} from "react"
import { useSearchParams } from "react-router-dom";
import CreateEventModal from "../CreateEventModal"
import axios from 'axios';



export default function GroupPage(props){
    let[searchParams, setSearchParams] = useSearchParams();
    const [show, setShow] = useState(false);
    const url = "http://localhost:8080/api/group?id=";
    const [group, setGroup] = useState();

    const getAllGroups = async () => {
        const id = searchParams.get("id")
        console.log(id)
        const groups = (await axios.get(`http://localhost:8080/api/group?id=${id}`)).data
        console.log(groups);
        setGroup(groups)
    }
    

    useEffect(()=>{
        getAllGroups()
    },[])
    return(
        
    <Container>
        <Flex>
        <GroupName as="h1">{group?.group_name}</GroupName>
        <Image>
            <img src="rex.jpg"/>
        </Image>
        </Flex>
        {/* <Bio as="p">{}</Bio> */}
        <Bio as="p">{group?.group_description}
        </Bio>
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