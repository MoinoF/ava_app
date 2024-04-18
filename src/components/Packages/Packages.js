import React, { useState } from 'react'
import styled from 'styled-components'
import Title from '../Title/Title'
import Studio from './Studio'
import Outdoors from './Outdoors'
import Weddings from './Weddings'
import Birthdays from './Birthdays'

const Section = styled.section`
  background: var(--background_dark);
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10rem 0.9375rem;
`

const Container = styled.div`
`

const Nav = styled.nav`
  display: flex;
  justify-content: center; /* Centraliza os itens horizontalmente */
  grid-gap: 2rem;
`

const Button = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.active ? '#FCCB0A' : 'var(--white)')};
  cursor: pointer;
  padding: 0.625rem 1rem;
  margin-top: 4rem;
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => (props.active ? '#FCCB0A' : 'transparent')};
  }
`

const PackagesItems = styled.div`
  margin-top: 5.625rem;
`

const Packages = () => {
  const [activePackage, setActivePackage] = useState('studio');

  const handlePackageChange = (packageType) => {
    setActivePackage(packageType);
  };

  return (
    <Section>
      <Title value='Pacotes' />
      <Container>
        <Nav>
          <Button active={activePackage === 'studio'} onClick={() => handlePackageChange('studio')}>
            Estúdio
          </Button>
          <Button active={activePackage === 'outdoors'} onClick={() => handlePackageChange('outdoors')}>
            Externas
          </Button>
          <Button active={activePackage === 'weddings'} onClick={() => handlePackageChange('weddings')}>
            Casamentos
          </Button>
          <Button active={activePackage === 'birthdays'} onClick={() => handlePackageChange('birthdays')}>
            Aniversários
          </Button>
        </Nav>

        <PackagesItems>
          {activePackage === 'studio' && <Studio />}
          {activePackage === 'outdoors' && <Outdoors />}
          {activePackage === 'weddings' && <Weddings />}
          {activePackage === 'birthdays' && <Birthdays />}
        </PackagesItems>
      </Container>
    </Section>
  )
}

export default Packages
