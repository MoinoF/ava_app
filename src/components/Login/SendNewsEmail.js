import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 2.5rem;
  display: flex;
  grid-gap: 1.125rem;
`

const Paragraph = styled.p`
  color: #F3F3EF;
  font-size: 0.875rem;
`

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 1.125rem;
`

const SendNewsEmail = () => {
  return (
    <Container>
      <CheckBox />
      <Paragraph>
        I do not wish to receive news and promotions from ava by email
      </Paragraph>
    </Container>
  )
}

export default SendNewsEmail