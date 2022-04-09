import react from 'react';
import styled from 'styled-components'
import Posts from './Posts';

export default function Post(props){
    return(
        <Container>
            <Flex>
                <Image>
                    <img src={props.image}/>
                </Image>
                <Name>
                    {props.name}
                </Name>
            </Flex>
            <Body>
                {props.post}      
            </Body>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    border-bottom: 2px solid rgb(196, 196, 196);
`

const Flex = styled.div`
    flex-direction: column;
`
const Name = styled.h1`
    position: relative;
    font-weight: bold;
    font-size: 1rem;
`
const Image = styled.div`
    left: 50%;
    padding: 1rem; 
`
const Body = styled.div`
    padding-top: 20px;
    line-height: 1.25em;
    `

