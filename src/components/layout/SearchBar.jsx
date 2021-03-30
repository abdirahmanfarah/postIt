import React from 'react'
import styled from 'styled-components'



const SearchBar = () => {
    
    return (
        <div>
            <Input type='textarea' placeholder='Post It' />
        </div>
    )
}

const Input = styled.input`
    margin:auto;
    padding:20px;
    width:100%;
`

export default SearchBar
