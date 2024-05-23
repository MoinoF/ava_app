import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/svg/logo'
import Nav from './Nav'
import Text from './Text'
import Search from '../Search/Search'

const Section = styled.section`
  height: 32rem;
`

const Container = styled.div`
  padding: 2.125rem 2.5rem;
`

const Centerlized = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LogoContainer = styled.div`
  margin-top: 3rem;
  justify-self: center;
`



const Header = () => {

  return (
    <Section className="header">
      <Container>
        <Nav />
        <Centerlized>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Text text={ "Prepare-se para elevar o seu trabalho fotográfico a novas alturas com os fundos " } bold={ "psd personalizaveis de alta qualidade." } />
          <Search />
        </Centerlized>
      </Container>
    </Section>
  )
}

export default Header