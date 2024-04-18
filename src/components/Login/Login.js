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

const Login = () => {

  const login = true

  const data ={
    labels: [
      "Email",
      "Password"
    ],
  
    placeholders: [
      "email@email.com",
      "********"
    ],
  
    names: [
      "email",
      "password"
    ],
  
    types: [
      "email",
      "password"
    ],
  
  }

  return (
    <Section>
      <Container>
        <Title value="Login" />
        <LoginForm login={login} data={ data } />
      </Container>
    </Section>
  )
}

export default Login