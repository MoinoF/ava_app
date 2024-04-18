import React from 'react'
import styled from 'styled-components'

const Container = styled.span`
  color: ${ props => props.color };
`

const Value = ({ value, color }) => {

  return (
    <Container color={color}>
      { value }
    </Container>
  )
}

export default Value