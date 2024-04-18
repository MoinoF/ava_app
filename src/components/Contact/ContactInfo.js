import React from 'react'
import styled from 'styled-components'
import InfoCard from './InfoCard'

const Container = styled.div``

const LocationTitle = styled.h3`
  color: var(--yellow);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
`

const Location = styled.p`
  color: var(--white);
  font-weight: bold;
  margin-top: 0.625rem;
`



const ContactInfo = ({ location }) => {
  return (
    <Container>
        <LocationTitle>Estamos localizados em</LocationTitle>
        <Location>{ location }</Location>
        <InfoCard label="Tel: " value_1="(258) 000000000" value_2="(258) 000000000"/>
        <InfoCard label="Wpp: " value_1="(258) 000000000" value_2="(258) 000000000"/>
        <InfoCard label="Horas: " value_1="08:00 - 19:00" value_2="Seg - Sab"/>
    </Container>
  )
}

export default ContactInfo