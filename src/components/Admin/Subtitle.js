import React from 'react'
import styled from 'styled-components'

const Container = styled.h2`
  color: #C2BBBA;
  font-size: 1rem;
  font-weight: ${ props => props.weight};
  letter-spacing: .1rem;
`

const Subtitle = ({ value, weight = "bold" }) => {
  return (
    <Container weight={ weight }>{ value }</Container>
  )
}

export default Subtitle