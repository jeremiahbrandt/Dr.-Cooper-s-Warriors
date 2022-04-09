import React from "react"
import Post from './Post'
import styled from "styled-components"

export default function Posts(props){
    return(
        <Wrapper>
            
            {props.posts.map((post) => (
                <Post key={post.id} {...post} />
            ))}
            
        </Wrapper>
    )

}

const Wrapper = styled.div`
	border: 1.5px solid #ccc;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
`