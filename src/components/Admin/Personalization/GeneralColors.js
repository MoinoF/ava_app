import React from 'react'
import styled from 'styled-components'
import Subtitle from '../Subtitle'
import ColorPicker from '../ColorPicker'
import Button from '../Button/Button'

const Section = styled.div`
  margin-top: 1.875rem;
`

const Container = styled.div`
  margin-top: 1.25rem;
  background: var(--div);
  padding: 2.5rem 2.25rem;
  border-radius: 1rem;
  display: grid;
  grid-gap: 2.5rem;
`

const Actions = styled.div`
  display: flex;
  grid-gap: 1.25rem;
  justify-content: flex-end;
`

const GeneralColors = () => {
  return (
    <Section>
      <Subtitle value={"Geral"} />

      <Container >
        <ColorPicker value={"Primária"} />
        <ColorPicker value={"Acentuação"} />
        <ColorPicker value={"Texto"} />
        <Actions>
          <Button save={true} />
          <Button discard={true} />
        </Actions>
      </Container>
      
    </Section>
  )
}

export default GeneralColors