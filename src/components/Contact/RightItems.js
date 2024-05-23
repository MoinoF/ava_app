import React from 'react'
import styled from 'styled-components'
import Title from '../Title/Title'
import ContactForm from '../Forms/ContactForm'



const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, .2);
  backdrop-filter: blur(6px);
  padding: 6.625rem 3.75rem 0 3.75rem;
`

const RightItems = () => {
  return (
    <Container>
      <Title text="Contacto" />
      <ContactForm />
    </Container>
  )
}

export default RightItems