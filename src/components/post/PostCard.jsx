import React, {useState} from 'react'
import styled from 'styled-components'

const PostCard = ({input, removeInput, upVote, downVote}) => {
   console.log(input)
// const [count, setCount] = useState(0)

// const upVote = () => {
//     setCount(...count, {counter + 1})
// }

// const downVote = () => {
//     setCount(...count, counter -1)
// }

// const upVote = id => {
    
//     console.log("button clicked", id)
// }
// const downVote = () => {
//     setCount(prevCount => prevCount - 1)
// }
    return (
        <Postcard>

           {input.map((item, index) => (
               <PostContainer key={index}>

                   <Post > {item.post}</Post>
                   {/* <button onClick={() => removeInput(item)}>Remove </button> */}
                   
                    <Votes>
                        <button onClick={() => upVote(item)}>UpVote</button>
                        <p>{item.counter}</p>
                        <button onClick={() => downVote(item)}>DownVote</button>
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
