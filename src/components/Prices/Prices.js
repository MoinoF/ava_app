import React from 'react'
import styled from 'styled-components'
import Title from '../Title/Title'
import Price from './Price'

const Section = styled.section`
  max-width: 72rem;
  min-height: 100vh;
  padding: 10rem 0.9375rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  grid-gap: 4.357rem;
  flex-direction: column;
  background: #e6e6e6;
  border-radius: 2rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 3rem;
`

const Prices = () => {
  return (
    <Section>
        <Title value="Preços" />
      <Container>
        <Price category="Estudio" desc="Desc" amount="00,00" />
        <Price category="Externas" desc="Desc" amount="00,00" />
        <Price category="Casamentos" desc="Desc" amount="00,00" />
        <Price category="Aniversários" desc="Desc" amount="00,00" />
      </Container>
    </Section>
  )
}

export default Prices