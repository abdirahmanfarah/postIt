import React, { useState } from 'react'
import PostCard from './PostCard'
import styled from 'styled-components'


const Posts = (props) => {
  const [input, setInput] = useState({
    post: ''
  });
  const [inputs, setInputs] = useState([
    {
      post: "hello",
    },
    {
      post: "beaver's are smelly",
    },
    {
      post: "what did you say about beavers??",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("")
    console.log(inputs)

    addInput(input)
  };
  const handleChange = (e) => {
    setInput((oldPosts) => ({
      ...oldPosts, [e.target.name]: e.target.value
    }))
  };

  const addInput = input => {
    const newInput = [...inputs, input]
    setInputs(newInput)
  }

  const removeInput = id  => {
    const removeInput = [...inputs].filter(x => x.id !== id)
    setInputs(removeInput)
    console.log("button clicked", id)
  }
  return (
    <PostContainer>
      <form onSubmit={handleSubmit}>
        <Input
          name='post'
          type="textarea"
          placeholder="Post It"
          onChange={handleChange}
          value={input.post || ""}
        />
      </form>
   
     
      <PostCard input={inputs} removeInput={removeInput}/>
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