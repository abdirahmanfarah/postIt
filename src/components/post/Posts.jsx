import React, { useState, useEffect } from 'react'
import PostCard from './PostCard'
import styled from 'styled-components'


const Posts = (props) => {
  const [input, setInput] = useState({
    post: ''
  });

  const [inputs, setInputs] = useState([
    {
      post: "hello",
      counter: 0
    },
    {
      post: "beaver's are smelly",
      counter: 0
    },
    {
      post: "what did you say about beavers??",
      counter: 0
    },
  ]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('')
    console.log(inputs)
    if(!input.post || /^s*$/.test(input.post)){
      return
    }

    addInput(input)
  };
  const handleChange = (e) => {
    setInput((oldPosts) => ({
      ...oldPosts, [e.target.name]: e.target.value
    }))
  };

  const addInput = input => {
    const newInput = [...inputs, {post:input.post, counter:0}]
    setInputs(newInput)
  }

  const removeInput = id  => {
    const removeInput = [...inputs].filter(x => x !== id)
    // const removeInput = [...inputs]
    // removeInput.splice(id, 1)
    setInputs(removeInput)
    console.log("button clicked", id, inputs)
  }

  const upVote = (id) => {
      const postIndex = [...inputs].findIndex(q => q ===id)
      const postToUpdate = inputs[postIndex]
      // const updatedPost = [...inputs, {counter: postToUpdate + 1}]
      const updatedPost = [...inputs]
      updatedPost[postIndex] = {
        ...postToUpdate,
        counter: postToUpdate.counter + 1

      }
      setInputs(updatedPost)
      console.log("button clicked",id, postIndex, postToUpdate)
     
  }
  const downVote = (id) => {
    const postIndex = [...inputs].findIndex(q => q ===id)
    const postToUpdate = inputs[postIndex]
    // const updatedPost = [...inputs, {counter: postToUpdate + 1}]
    const updatedPost = [...inputs]
    updatedPost[postIndex] = {
      ...postToUpdate,
      counter: postToUpdate.counter - 1

    }



 
    setInputs(updatedPost)
    // console.log("button clicked",id, postIndex, postToUpdate)
   
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
   
     
      <PostCard input={inputs} removeInput={removeInput} upVote={upVote} downVote={downVote}/>
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