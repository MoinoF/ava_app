import React from 'react'
import styled from 'styled-components'
import Button from '../../Buttons/Button'
import SimilarItems from './SimilarItems'

const Section = styled.section`
  padding: 3.75rem 2.5rem;
  min-height: 100vh;
`

const BacgroundDescContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.5rem;
  height: 100vh;
  margin-bottom: 3.75rem;
`

const BackgroundPreviewContainer = styled.div`
  display: grid;
  grid-gap: 0.625rem;
`

const BackgroundPreview = styled.div`
  width: 26.125rem;
  height: 29.9375rem;
  background: var(--links);
  border-radius: 1rem;
  padding: 2.5rem;
`

const BackgroundPreviewThunbnails = styled.div`
  display: flex;
  grid-gap: 1.3rem;
`

const BackgroundPreviewThunbnail = styled.div`
  width: 7.8125rem;
  height: 9.75rem;
  background: var(--links);
  border-radius: .5rem;
`

const DescContainer = styled.div`
`

export const Title = styled.h3``

const DescParagraph = styled.p`
  max-width: 23.5rem;
  margin-top: 1.125rem;
  margin-bottom: 1.125rem;
`

const ExemplesUseContainer = styled.div`
  margin-top: 8.825rem;

`

const ExemplesUsePreviewContainer = styled.div`
  display: flex;
  grid-gap: 0.625rem;
  margin-top: 1.125rem;

`

const ExemplesUsePreview = styled.div`
  width: 16.375rem;
  height: 20.25rem;
  background: var(--links);
  border-radius: 1rem;
`

const BackgroundDesc = () => {
  return (
    <Section>
      <BacgroundDescContainer>
        
        <BackgroundPreviewContainer>
          <BackgroundPreview>
          </BackgroundPreview>
          <BackgroundPreviewThunbnails>
            <BackgroundPreviewThunbnail></BackgroundPreviewThunbnail>
            <BackgroundPreviewThunbnail></BackgroundPreviewThunbnail>
            <BackgroundPreviewThunbnail></BackgroundPreviewThunbnail>
          </BackgroundPreviewThunbnails>
        </BackgroundPreviewContainer>


        <DescContainer>
          <Title>Title here</Title>
          <DescParagraph>
            Fundo branco de studio completamente customizavel, com um banco e um vaso de palmeira.
          </DescParagraph>
          <Button text="text button" icon="fas fa-download" />
          <ExemplesUseContainer>
            <Title>Title here</Title>
            <ExemplesUsePreviewContainer>
              <ExemplesUsePreview></ExemplesUsePreview>
              <ExemplesUsePreview></ExemplesUsePreview>
            </ExemplesUsePreviewContainer>
          </ExemplesUseContainer>
        </DescContainer>

      </BacgroundDescContainer>
      <hr style={{ opacity: ".2"}} ></hr>
      <SimilarItems />
    </Section>
  )
}

export default BackgroundDesc