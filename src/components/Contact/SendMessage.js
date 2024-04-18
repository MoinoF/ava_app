import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Title = styled.h1`
  color: var(--white);
`

const TextColored = styled.span`
  color: var(--yellow);
`

const SendMessage = () => {
  return (
    <Container>
      <Title>
        Escreva uma 
        <TextColored> mensagen</TextColored>
      </Title>
    </Container>
  )
}

export default SendMessage