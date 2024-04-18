import React from 'react'
import styled from 'styled-components'
import Header from '../header/Header'
import About from '../About/About'
import Gallery from '../Gallery/Gallery'
import Prices from '../Prices/Prices'
import Packages from '../Packages/Packages'
import Contact from '../Contact/Contact'
import FixedScroll from '../Fixed_Scroll/FixedScroll'
import Block from '../Block/Block'

const Container = styled.div``

const Pages = styled.div``

const Home = () => {

  const pages = [
    <Header />,
    <FixedScroll />,
    <About />,
    <Block />,
    <Gallery />,
    <Prices />,
    <Packages />,
    <Contact />,
  ]


  return (
    
    <>
      <Container >
        {pages.map((page, index) => (
          <Pages key={index} >
            {page}
          </Pages>
        ))}
      </Container>
    </>
  )
}

export default Home