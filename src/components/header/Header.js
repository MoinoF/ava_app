import React from 'react'
import styled from 'styled-components'
import HeaderNav from '../Header_Nav/HeaderNav'
import WhiteYellow from '../white_yellow/WhiteYellow'
import Button from '../Button/Button'
import HeaderBackground from '../Header_Background/HeaderBackground'

const Container = styled.div`
  padding: 3rem 15px;
  max-width: 72rem;
  margin: 0 auto;
`

const Nav = styled.div`
  position: relative;
`

const H1 = styled.h1`
  color: var(--white);
  font-size: 5.75rem;
  margin-top: 50vh;
  letter-spacing: .2rem;
`

const Down = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`

const Complements = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`



const Header = () => {

  const value_color = "#e5e5e5"
  const yellow_value_color = "#fccB0a"

  return (

    <HeaderBackground>
      {
        <Container>
          <Nav >
        
            <HeaderNav />

            <Down>
              <H1>Fotografia</H1>
              <Complements >
                <WhiteYellow value_color={ value_color } yellow_value_color={ yellow_value_color } value="é " yellow_value="arte" />
                <WhiteYellow value_color={ value_color } yellow_value_color={ yellow_value_color }  value="e nós somos " yellow_value="artistas" />
                <Button height={"4rem"} value="Marcar sessão" />
              </Complements>
            </Down>
            
          </Nav>
        </Container>
      }
    </HeaderBackground>
  )
}

export default Header