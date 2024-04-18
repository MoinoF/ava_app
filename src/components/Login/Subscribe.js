import React from 'react'
import styled from 'styled-components'
import LoginForm from '../Form/LoginForm'
import Title from '../Title/Title'


const Section = styled.section`
  background: var(--background_darker);
  color: #fff;
`

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 2.5rem;
  padding: 3.75rem 0.9375rem;
`

const Subscribe = () => {

  const subscribe = true

  const data ={
    labels: [
      "Nome",
      "Email",
      "Password",
      "Repetir password",
    ],
  
    placeholders: [
      "Nome completo",
      "email@email.com",
      "********",
      "********"
    ],
  
    names: [
      "name",
      "email",
      "password",
      "reapeat password"
    ],
  
    types: [
      "text",
      "email",
      "password",
      "password"
    ],
  
  }

  return (
    <Section>
      <Container>
      <Title value="Cadastrar" />
        <LoginForm subscribe={subscribe} data={ data } />
      </Container>
    </Section>
  )
}

export default Subscribe