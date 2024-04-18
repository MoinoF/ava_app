import React from 'react'
import styled from 'styled-components'
import { Background } from '../Header_Background/HeaderBackground'
import { imageUrl } from '../Header_Background/HeaderBackground'
import Filter from '../Filter/Filter'
import Quote from '../Quote/Quote'

const Container = styled.div`

`

const QuoteContainer = styled.div`
  max-width: 72rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const FixedScroll = () => {

  const color_1 = "#e5e5e5"
  const color_2 = "#fccB0a"

  return (
    <Container>
      <Background imageUrl={imageUrl} attachment="fixed" >
        <Filter position="absolute" top="720" alpha=".50" />
        <QuoteContainer>

         <Quote color_1={ color_1 } color_2={ color_2 } value_1="Bem vindo a " colored_1="BLACK" value_2=", onde o foco é a " colored_2="CRIATIVIDADE." quote_value='A vida não é perfeita, mas as tuas fotos podem ser!' />

        </QuoteContainer>

      </Background>
    </Container>
  )
}

export default FixedScroll