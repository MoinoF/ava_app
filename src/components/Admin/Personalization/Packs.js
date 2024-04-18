import React from 'react'
import styled from 'styled-components'
import Subtitle from '../Subtitle'
import DynamicPack from './DynamicPack'

const Section = styled.div`
  margin-top: 3.75rem;
`

const Container = styled.div``

const Packs = () => {
  return (
    <Section>
      <Subtitle value={"Pacotes"} />
      <Container>
        <DynamicPack subtitle={"Básico"} />
        <DynamicPack subtitle={"Standard"} />
        <DynamicPack subtitle={"Premium"} />
      </Container>
    </Section>
  )
}

export default Packs