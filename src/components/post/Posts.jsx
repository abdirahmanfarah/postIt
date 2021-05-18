import React, { useState, useEffect } from 'react'
import PostCard from './PostCard'
import styled from 'styled-components'


const Posts = (props) => {
  const [input, setInput] = useState({
    post: ''
  });

  const [inputs, setInputs] = useState([
    {
      id: 1,
      post: "hello",
      counter: 0,
      currentDateTime: Date.now(),
    },
    {
      id:2,
      post: "beaver's are smelly",
      counter: 0,
      currentDateTime: Date.now(),
    },
    {
      id:3,
      post: "what did you say about beavers??",
      counter: 0,
      currentDateTime: Date.now(),
    }
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
    const newInput = [...inputs, 
      {
        id:Math.floor(Math.random() * 10000), 
        post:input.post, counter:0, 
        currentDateTime: Date.now()}]
    setInputs(newInput)
  }

  const removeInput = (id) => {
   
    const removeInput = [...inputs].filter(x => x.id !== id)
    // const removeInput = [...inputs]
    // removeInput.splice(id, 1)
    setInputs(removeInput)
    console.log("button clicked", id)
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
      
     
  }
  const downVote = (id) => {

    // if()

    const postIndex = [...inputs].findIndex(q => q ===id)
    const postToUpdate = inputs[postIndex]
    // const updatedPost = [...inputs, {counter: postToUpdate + 1}]
    const updatedPost = [...inputs]
    updatedPost[postIndex] = {
      ...postToUpdate,
      counter: postToUpdate.counter - 1

    }
    // console.log(updatedPost[postIndex]) 
    if(updatedPost[postIndex].counter < -5){
      // let removePost = updatedPost[postIndex]
      removeInput(updatedPost[postIndex].id)
    }else{
      
      setInputs(updatedPost)
    }
 
    // console.log("button clicked",id, postIndex, postToUpdate)
    // console.log("button clicked",id, postToUpdate, updatedPost)
   
}

const hotPost = () => {
  // query inputs arry by posts with the highest counters up top
  const hotPosts = [...inputs].sort((x, y) => y.counter - x.counter)
    // console.log(hotPosts)
  setInputs(hotPosts)
}
const newPost = () => {
    const newPosts = [...inputs].sort((x, y) => y.currentDateTime - x.currentDateTime)
    setInputs(newPosts)
    console.log(newPosts)
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
          minLength = '10'
        />
      </form>
      <ButtonGroupA>
        <Button onClick={() => newPost()}> New</Button>
        <Button onClick={() => hotPost()}>Hot</Button>
      </ButtonGroupA>
     
      <PostCard input={inputs} removeInput={removeInput} upVote={upVote} downVote={downVote}/>
    </PostContainer>
  )
}

export default Posts

const PostContainer = styled.div`
    margin:20px;
    // background:red;
    border:1px solid blue;

`

const Input = styled.input`
  margin: auto;
  padding: 20px;
  width: 100%;
  font-size: 1.5rem;
  border:1px solid red;
`;

const ButtonGroupA = styled.div`
  display:flex;
  justify-content:space-around;
`

const Button = styled.button`
  padding:10px;
  font-size:1rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color:palevioletred;
`