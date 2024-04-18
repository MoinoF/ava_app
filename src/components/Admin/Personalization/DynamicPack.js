import React from 'react'
import styled from 'styled-components'
import Subtitle from '../Subtitle'
import ColorPicker from '../ColorPicker'
import Button from '../Button/Button'

const Section = styled.div`
  margin-top: 2.5rem;
`

const Container = styled.div`
   margin-top: 1.25rem;
  background: var(--div);
  padding: 2.5rem 2.25rem;
  border-radius: 1rem;
`

const Background = styled.div`
  display: grid;
  grid-gap: 2.5rem;
`
const ButtonPack = styled.div`
  margin-top: 3.75rem;
  display: grid;
  grid-gap: 2.5rem;
`

const Actions = styled.div`
  display: flex;
  grid-gap: 1.25rem;
  justify-content: flex-end;
  margin-top: 2.5rem;
`


const DynamicPack = ({ subtitle }) => {
  return (
    <Section>

      <Subtitle value={ subtitle } weight='normal' />
      <Container>
        <Background>
          <ColorPicker value={"Fundo"} />
          <ColorPicker value={"Texto"} />
        </Background>
        <ButtonPack>
          <Subtitle value={ "Botão" } weight='normal' />
          <ColorPicker value={"Fundo"} />
          <ColorPicker value={"Texto"} />
        </ButtonPack>
        <Actions>
            <Button save={true} />
            <Button discard={true} />
          </Actions>
      </Container>

    </Section>
  )
}

export default DynamicPack