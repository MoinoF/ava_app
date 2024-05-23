import React from 'react'
import styled from 'styled-components'
import LeftItems from '../Contact/LeftItems'
import Title from '../Title/Title'
import { Link } from 'react-router-dom'
import AnAccount from './AnAccount'
import Buttons from './Buttons'
import SendNewsEmail from './SendNewsEmail'
import Terms from './Terms'

const Section = styled.section`
  height: 100vh;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 35.25rem;
`

const RightItems = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, .2);
  backdrop-filter: blur(6px);
  padding: 6.625rem 3.75rem 0 3.75rem;
`

const Content = styled.div`
  margin-top: 3.75rem;
  display: grid;
  grid-gap: 2.5rem;
`


const Subscribe = () => {
  return (
    <Section className="background">
      <Container>
        <LeftItems  />
        <RightItems>
          <Title text="Criar conta" />
          <Content>
            <Buttons />
          </Content>
            <SendNewsEmail />
            <Terms />
            <AnAccount text="já tem conta?" text_link="Entrar" to="/login" />
        </RightItems>
      </Container>
    </Section>
  )
}

export default Subscribe