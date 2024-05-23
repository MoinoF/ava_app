import React from 'react'
import styled from 'styled-components'
import DynamicCard from './DynamicCard'
import SocialMedias from '../SocialMedias/SocialMedias'
import Copyright from './Copyright'

const Section = styled.section`
  background: #1c1c1c;
  `

const Container = styled.div`
  display: flex;
  padding: 2.5rem 2.5rem;
  flex-wrap: wrap;
  grid-gap: 2.5rem;
  justify-content: space-between;
`

const Footer = () => {
  return (
    <Section>
      <Container>

        <DynamicCard texts={[ "Preços", "Sobre nós" ]} links={[ "prices", "about" ]} title={"Informações"} />

        <DynamicCard texts={[ "Termos de uso", "Licença", "Politicas de privalidade", "Copyright infomartion", "Politicas de cookies", "Definições de cookies" ]} links={[ "terms_of_use", "licence", "privacy_policies", "copyright_informations", "cookies_policies", "Cookies_definitions" ]} title={"Legal"} />

        <SocialMedias />

        <DynamicCard texts={[ "FAQ", "Seach guide", "Contacto" ]} links={[ "faq", "seach_guide", "contact" ]} title={"Legal"} />
      </Container>
      <hr style={{opacity: "0.1"}}></hr>
      <Copyright />
    </Section>
  )
}

export default Footer