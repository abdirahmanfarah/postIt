import React, {useState} from 'react'
import styled from 'styled-components'

const PostCard = ({input, removeInput, counter}) => {
//    console.log(props)
const [count, setCount] = useState()

// const upVote = () => {
//     setCount(...count, {counter + 1})
// }

// const downVote = () => {
//     setCount(...count, counter -1)
// }

const upVote = () => {
    // const newCount = [...inputs]  Adding in counts is where you left off. 
    setCount(prevCount => prevCount + 1)
}
const downVote = () => {
    setCount(prevCount => prevCount - 1)
}
    return (
        <Postcard>

           {input.map((item, index) => (
               <PostContainer key={index}>

                   <Post > {item.post}</Post>
                   {/* <button onClick={() => removeInput(item)}>Remove </button> */}
                   
                    <Votes>
                        <button onClick={() => upVote()}>UpVote</button>
                        <p>{item.counter}</p>
                        <button onClick={() => downVote()}>DownVote</button>
                    </Votes>
               </PostContainer>
           ))}
        </Postcard>
    )
}

const Post = styled.h2`
    // padding:5px;
    // margin:auto;
    border:1px solid purple;
`
const PostContainer = styled.div`
border:1px solid green;
    display:flex;
    justify-content:space-between;
`
const Votes = styled.div`
    // padding:2px;
`

const Postcard = styled.div`
    background:tan;
    
`

export default PostCard
