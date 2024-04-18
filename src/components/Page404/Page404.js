import React from 'react'
import styled from 'styled-components'
import QuoteSep from '../Sep/QuoteSep'
import { Link } from 'react-router-dom'

const Section = styled.section`
  height: 100vh;
  background: var(--background_darker);
  color: #fff;
`

const Container = styled.div`
  max-width: 72rem;
  padding: 10rem 0.9375rem;
  height: 100%;
  margin: 0 auto;
  font-family: Montserrat;
  display: grid;
  justify-content: flex-end;
  align-content: flex-end;
  /* position: relative; */
`

const Text = styled.p`
  color: var(--text);
  text-align: right;

`

const ErrorNumber = styled.h1`
  font-size: 6rem;
  color: var(--yellow);
  text-align: right;
`

const Sep = styled.span`
  width: 28.125rem;
  height: 0.625rem;
  background: var(--yellow);
  margin-top: 1rem;
`


const Page404 = () => {
  return (
    <Section>
      <Container>
        <Text>Error</Text>
        <ErrorNumber>404</ErrorNumber>
        <Text>Pagina não encontrada</Text>
        <Sep />
        <Link style={{color: "#FCCB0A", textAlign: "right", marginTop: "1rem"}} to={"/"}>Homepage</Link>
      </Container>
    </Section>
  )
}

export default Page404