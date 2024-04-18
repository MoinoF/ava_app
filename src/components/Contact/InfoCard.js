import React from 'react'
import styled from 'styled-components'
import SmallSep from '../Sep/SmallSep'

const Container = styled.div`
  margin-top: 2rem;
`

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 2rem;
  margin-top: 0.625rem;
  /* justify-content: flex-start; */
`

const Label = styled.p`
  color: var(--label);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
  margin-top: 0.625rem;

`

const Values = styled.ul`
  color: var(--white);
`

const Value = styled.li`
  font-weight: bold;
  letter-spacing: .1rem;
`


const InfoCard = ({ label, value_1, value_2 }) => {
  return (
    <Container>
        <SmallSep sep_color="#EC250E" />
        <InfoContainer>
            <Label>{ label }</Label>
            <Values>
                <Value>{ value_1 }</Value>
                <Value>{ value_2 }</Value>
            </Values>
        </InfoContainer>
    </Container>
  )
}

export default InfoCard