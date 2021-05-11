import React, { useState } from 'react'
import PostCard from './PostCard'
import styled from 'styled-components'


const Posts = (props) => {
  // const [newInput, setNewInput] = useState({
  //   post: ''
  // });


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // setInput(e.target.value)
  //   console.log(input)
  // };
  // const handleChange = (e) => {
  //   setInput((oldPosts) => ({
  //     ...oldPosts, [e.target.name]: e.target.value
  //   }))
  // };

  // const addInput = text => {
  //   const newInput = [...inputs, { text}]

  // }
  return (
    <PostContainer>
      {/* <form onSubmit={handleSubmit}>
        <Input
          name='post'
          type="textarea"
          placeholder="Post It"
          onChange={handleChange}
          value={newInputs.post}
        />
      </form> */}
   
     
    {/* <PostCard inputs={inputs} /> */}
    </PostContainer>
  )
}

export default Posts

const PostContainer = styled.div`
    margin:20px;
    background:red;
    border:1px solid blue;

`

const Input = styled.input`
  margin: auto;
  padding: 20px;
  width: 100%;
  font-size: 1.5rem;
  border:1px solid red;
`;