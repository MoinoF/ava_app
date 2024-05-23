import React from 'react'
import styled from 'styled-components'
import MenuNav from '../MenuNav/MenuNav'
import Title from '../Title/Title'
import Plan from './Plan'

const Section = styled.section`
`

const PurpleRectungle = styled.div`
  height: 24.5625rem;
  background: var( --asset );
  position: absolute;
  left: 0;
  right: 0;
  
`

const Container = styled.div`
  max-width: 49.9375rem;
  margin: 0 auto;
  padding: 3.685rem 1rem;
`

const Plans = styled.div`
  margin-top: 3.75rem;
  display: flex;
  grid-gap: 1.25rem;
`


const Prices = () => {
  return (
    <>
      <MenuNav />
      <Section>
        <PurpleRectungle>
          <Container>
            <Title text="Escolha seu plano" />
            <Plans>
              <Plan plan="Básico" price="9.99" period="mês" vantages="Acesso a 10 fundos por mês" />
              <Plan premium={ true } plan="Premmium" price="19" period="mês" vantages="Acesso a todos fundos" />
              <Plan plan="Anual" price="99.9" period="ano" vantages="Acesso ilimitado a todos os fundo PSD por um ano" />
            </Plans>
          </Container>
        </PurpleRectungle>
      </Section>
    </>
  )
}

export default Prices