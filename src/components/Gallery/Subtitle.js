import React from 'react'
import styled from 'styled-components'

const Container = styled.h2`
  color: #ccc;
  font-size: 3.5rem;
  letter-spacing: .1rem;
  margin-top: 3.125rem;
`

const Sep = styled.span`
  display: block;
  width: 20.125rem;
  height: 0.425rem;
  background: var(--yellow);
  margin-top: .5rem;
`


const Subtitle = ({ value }) => {
  return (
    <Container>
      { value }
      <Sep />
    </Container>
  )
}

export default Subtitle