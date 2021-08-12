import React, {useState} from 'react'
import styled from 'styled-components'



const SearchBar = () => {
   
    
    return (
        <form onSubmit={handleSubmit}>
            <Input type='textarea' placeholder='Post It' onChange={handleChange} />
        </form>
    )
}

const Input = styled.input`
    margin:auto;
    padding:20px;
    width:100%;
    font-size:1.5rem;
`

export default SearchBar
