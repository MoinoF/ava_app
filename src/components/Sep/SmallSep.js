import React from 'react'
import styled from 'styled-components'

const Container = styled.span`
 display: flex;
 grid-gap: 0.625rem;
`

const Sep = styled.span`
  display: flex;
  width: 0.9375rem;
  height: 0.1875rem;
  background: ${ props => props.sep_color };
  
`

const SmallSep = ({ sep_color }) => {
  return (
    <Container >
        <Sep sep_color={ sep_color }></Sep>
        <Sep sep_color={ sep_color }></Sep>
       
    </Container>
  )
}

export default SmallSep