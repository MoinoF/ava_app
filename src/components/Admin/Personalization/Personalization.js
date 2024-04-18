import React from 'react'
import styled from 'styled-components'
import Title from '../../Title/Title'
import HeaderUpdate from './HeaderUpdate'
import Filter from './Filter'
import Block from './Block'
import Colors from './Colors'
import Packs from './Packs'

const Section = styled.section`
  max-width: 72rem;
  margin: 0 auto;
  padding: 5.625rem 2.5rem 5.625rem 0.9375rem;
  position: absolute;
  left: 18rem;
  right: 0;
  background: #0A0000;
  padding-left: 3.5rem;
`

const Container = styled.div``

const Personalization = () => {
  return (
    <Section>
      <Title value={'Personalização'} admin={true} />
      <Container >
        <HeaderUpdate />
        <Filter />
        <Block />
        <Colors />
        <Packs />
      </Container>
    </Section>
  )
}

export default Personalization