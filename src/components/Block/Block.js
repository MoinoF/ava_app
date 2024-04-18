import React from 'react'
import styled from 'styled-components'
import Quote from '../Quote/Quote'
import UrlImage from '../../assets/images/soul.jpg'

const Section = styled.section`
  height: 100vh;
  background: var(--background_darker);
`

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
`

const QuoteContainer = styled.div`
  align-self: center;
  justify-self: flex-end;
`

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`

const Block = () => {

  const color_1 = "#e5e5e5"
  const color_2 = "#fccB0a"

  return (
    <Section>
        <Container>
          <QuoteContainer>
            <Quote align="right" color_1={ color_1 } color_2={ color_2 } value_1="A " colored_1="BLACK PHOTOGRAPHY " value_2="captura até a " colored_2="ALMA." />
          </QuoteContainer>
          <Image src={ UrlImage } alt='image'>

          </Image>
            
        </Container>
    </Section>
  )
}

export default Block