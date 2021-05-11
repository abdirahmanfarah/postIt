import React from 'react'
import styled from 'styled-components'

const PostCard = (props) => {
    // const {inputs} = propss
    console.log(props.input[0])
    return (
        <Postcard>

           {props.input.map((item) => (
              <Posts>{item.post}</Posts>
           ))}
          
          {/* <p>{props.inputs.post}</p>  */}


          {/* <p>This is paragraph: {props.inputs.post}</p> */}

          {/* <h1> Hello : {props.input[0]}</h1> */}
        </Postcard>
    )
}

const Posts = styled.p`
    background:red;
`

const Postcard = styled.div`
    background:tan;
`

export default PostCard
