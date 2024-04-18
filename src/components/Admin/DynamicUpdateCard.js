import React from 'react'
import styled from 'styled-components'
import HeaderImagePreview from './Personalization/HeaderImagePreview'
import Subtitle from './Subtitle'
import FileUpload from './FileUpload'
import ColorPicker from './ColorPicker'
import Button from './Button/Button'

const Section = styled.div`
  margin-top: 3.75rem;
`

const Container = styled.div`
  margin-top: 1.25rem;
  background: var(--div);
  padding: 2.5rem 2.25rem;
  border-radius: 1rem;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 2rem;
`

const Actions = styled.div`
`

const Buttons = styled.div`
  display: flex;
  grid-gap: 1.25rem;
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 2.5rem;
`


const DynamicUpdateCard = ({ subtitle,  filter =  true, block}) => {
  return (
    <Section>

    <Subtitle value={ subtitle} />
  <Container>
    <Flex >
      <HeaderImagePreview block={ block } />
      <Block>

        <Actions>
          <FileUpload />
          {
            filter && 
            <ColorPicker mt='1.25rem' value={'Cor do filtro'} />
          }
        </Actions>
        <Buttons>
          <Button save={true} />
          <Button discard={true} />
        </Buttons>

      </Block>
    </Flex>
  </Container>

</Section>
  )
}

export default DynamicUpdateCard