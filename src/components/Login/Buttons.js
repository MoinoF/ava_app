import React from 'react'
import styled from 'styled-components'
import Button from '../Buttons/LoginButton'


const Container = styled.div`
  display: grid;
  grid-gap: 1.125rem;
`

const Buttons = () => {
  return (
    <Container>
      <Button text="Continuar com google" icon="fab fa-google" />
      <Button text="Continuar com facebook" icon="fab fa-facebook" />
    </Container>
  )
}

export default Buttons