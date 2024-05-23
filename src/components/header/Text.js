import React from 'react'
import styled from 'styled-components'

const Container = styled.p`
  max-width: 25.9375rem;
  color: #fbf4f4;
  font-size: 1.125rem;
  position: relative;
  margin-left: 6rem;
  margin-top: 1.25rem;
  z-index: 2;
  &&::before {
    content: '';
    display: inline-block;
    width: 9.5625rem;
    height: 5.875rem;
    background: var(--asset);
    position: absolute;
    top: -.3rem;
    left: -5rem;
    z-index: -1;
  }
`

const Bold = styled.p`
  font-weight: bold;
`



const Text = ({ text, bold }) => {
  return (
    <Container>
      { text }
      <Bold>
        { bold }
      </Bold>
    </Container>
  )
}

export default Text