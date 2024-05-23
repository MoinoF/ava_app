import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  grid-gap: 1.125rem;
`

const Paragraph = styled.p`
  color: #F3F3EF;
  font-size: 0.875rem;
`


const Terms = () => {
  return (
    <Container>
      <Paragraph>
        By continuing, you agree to Ava <b>Terms of Use</b> and <b>Privacy Policy.</b>
      </Paragraph>
    </Container>
  )
}

export default Terms