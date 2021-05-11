import React from 'react'
import styled from 'styled-components'

const PostCard = (props) => {
   console.log(props)
    return (
        <Postcard>

           {props.input.map((item, index) => (
               <div key={index}>

                   <Posts > {item.post}</Posts>
                   <button onClick={() => props.removeInput(item)}>Remove </button>
               </div>
           ))}
        </Postcard>
    )
}

const Posts = styled.h2`
    padding:5px;
    margin:auto;

`

const Postcard = styled.div`
    background:tan;
`

export default PostCard
