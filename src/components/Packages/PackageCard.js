import React from 'react'
import styled from 'styled-components'
import SmallSep from '../Sep/SmallSep'
import Button from '../Button/Button'

const Container = styled.div`
  width: 18.875rem;
  height: 29.375rem;
  border-radius: 4.0625rem;
  padding: 3.75rem 2.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  grid-gap: 2rem;
  background: ${props => props.background};
  transform: scale(${props => props.scale});
  transition: transform 0.2s ease; /* Adicionando uma transição suave */
`

const Plan = styled.p`
  color: ${props => props.color};
  font-size: 1.125rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 0.625rem;
`

const Amount = styled.span`
  color: ${props => props.color};
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 0.625rem;
`

const TotalPhotos = styled.p`
  color: ${props => props.color};
  font-size: 1.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 0.625rem;
`

const PackageCard = ({ button_background, button_color, plan, amount, total_photos, sep_color, button_value, text_color, background, scale }) => {
  return (
    <Container background={background} scale={scale}>
      <Plan color={text_color}>
        {plan}
        <SmallSep sep_color={sep_color} />
      </Plan>
      <Amount color={text_color}>
        {amount + " Mt"}
        <SmallSep sep_color={sep_color} />
      </Amount>
      <TotalPhotos color={text_color}>
        {total_photos + " fotos"}
        <SmallSep sep_color={sep_color} />
      </TotalPhotos >
      <Button height="4rem" background={button_background} color={button_color} width='10.5rem' value={button_value} />
    </Container>
  )
}

export default PackageCard
