import React from 'react'
import styled from 'styled-components'
import Wireframe from './wireframe'
import { Title } from './BackgroundDesc'


const Section = styled.section`
  padding: 3.75rem 0;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
  grid-column-gap: 1.125rem;
  grid-row-gap: 2.5rem;
  margin-top: 1.875rem;
`

const SimilarItems = () => {
  return (
    <Section>
      <Title >Itens Similares</Title>
      <Container>
        <Wireframe />
        <Wireframe />
        <Wireframe />
        <Wireframe />
      </Container>
    </Section>
  )
}

export default SimilarItems