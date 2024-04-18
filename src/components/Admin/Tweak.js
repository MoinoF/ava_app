import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 15.25rem;
`

const Label = styled.p`
  /* text-align: center; */
`

const Value = styled.p`
  /* text-align: center; */
  margin-top: 1.25rem;
`



const Tweak = ({ label, value }) => {
  return (
    <Container>
      <Label>{ label }</Label>
      <Value>{ value }</Value>
    </Container>
  )
}

export default Tweak