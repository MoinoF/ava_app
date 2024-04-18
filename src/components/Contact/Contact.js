import React from 'react'
import styled from 'styled-components'
import Title from '../Title/Title'
import Map from './Map'
import ContactInfo from './ContactInfo'
import SendMessage from './SendMessage'
import MessageForm from '../Form/MessageForm'

const Section = styled.section`
  background: var(--background_darker);
  min-height: 100vh;
  
`

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 10rem 0.9375rem;
`

const MapContactContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 2rem;
`

const MessageContainer = styled.div`
  margin-top: 6.25rem;
`


const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Section>
      <Container>
        <Title value="Contacto" />
        <MapContactContainer>
          <Map />
          <ContactInfo location="Moçambique - Maxixe" />
        </MapContactContainer>
        <MessageContainer>
          <SendMessage />
          <MessageForm onClick={ handleSubmit } />
        </MessageContainer>
      </Container>
    </Section>
  )
}

export default Contact