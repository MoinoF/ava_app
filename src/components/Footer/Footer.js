import React from 'react'
import styled from 'styled-components'
import Subtitle from '../Subtitle/Subtitle'
import LinkTo from '../Link/LinkTo'
import FbIcon from '../../assets/svg/facebook_icon_Svg'
import InstaIcon from '../../assets/svg/instagram_icon_Svg'
import SectionSep from '../Sep/SectionSep'


const Section = styled.footer`
  background: var(--background_dark);
  color: #fff;
`

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 5rem 0.9375rem ;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  grid-gap: 2rem;
`

const SiteMapContainer = styled.div`
`

const SiteMapLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2.5rem;
`

const About = styled.div`
  text-align: center;
`

const AboutParagraph = styled.p`
  max-width: 18.125rem;
  color: var(--text);
  margin-top: 2.5rem;
  line-height: 1.625rem;
`

const SocialMedias = styled.div`
  text-align: center;
  
`

const A = styled.a`
  cursor: pointer;
`

const SocialMediasIcons = styled.div`
  display: flex;
  grid-gap: 2.5rem;
  margin-top: 2.5rem;
  justify-content: center;
`

const Copyright = styled.p`
  font-family: Montserrat;
  color: #302D2D;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 2rem;
`




const Footer = () => {

  const icons_styles = {
    size: "46px",
    fill: "#FCCB0A",
  }

  const year = new Date().getFullYear()

  return (
    <Section>
      <SectionSep />
      <Container>
        <SiteMapContainer>
          <Subtitle value={"Mapa do site"} />
          <SiteMapLinks>

            <LinkTo to={'/'} value={ "Inicio" } />
            <LinkTo to={'/contact'} value={ "Contacto" } />
            <LinkTo to={'/about'} value={ "Sobre" } />
            <LinkTo to={'/subscribe'} value={ "Inscrever-se" } />
            <LinkTo to={'/gallery'} value={ "Galeria" } />
            <LinkTo to={'/'} value={ "Topo" } />

          </SiteMapLinks>
        </SiteMapContainer>
        <About>
          <Subtitle value={"Sobre"} />
          <AboutParagraph>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
          </AboutParagraph>
        </About>
        <SocialMedias>
          <Subtitle value={"Redes Sociais"} />
          <SocialMediasIcons>
            <A href='https://facebook.com' target='_blanck'>
    	        <FbIcon size={ icons_styles.size } fill={ icons_styles.fill }  />
            </A>
            <A href='https://instagram.com' target='_blanck'>
    	        <InstaIcon size={ icons_styles.size } fill={ icons_styles.fill }  />
            </A>
    	    
          </SocialMediasIcons>
        </SocialMedias>
      </Container>
      <Copyright>
        Black Photography - alguns direitos reservados { year }
      </Copyright>
    </Section>
  )
}

export default Footer