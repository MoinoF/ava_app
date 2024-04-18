import React from 'react'
import styled from 'styled-components'
import Title from '../Title/Title'
import Image from './Image'
import LogoSvg from '../../assets/svg/logoSvg'
import Button from '../Button/Button'
import SectionSep from '../Sep/SectionSep'
import axios from 'axios'
import Logo from '../Logo/Logo'


const Section = styled.section`
  min-height: 100vh;
  background: var(--background_dark);
`

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 10rem 0.9375rem;
  position: relative;
`

const Flex = styled.div`
  display: flex;
  grid-gap: 10.375rem;
  justify-content: center;
`

const Images = styled.div`
  display: flex;
  grid-gap: 1rem;
  position: relative;
  margin-top: 6.357rem;
`

const Img = styled.div`
  position: absolute;
  left: 9.357rem;
  bottom: 10.5rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: 2rem;
`

const Paragraph = styled.p`
  color: var(--text);
  max-width: 20.125rem;
`

const About = () => {



  return (
    <Section id='about'>
      <Container>
        <Title value="Sobre" />
        <Flex >

          <Images>
            <Image />
            <Img>
              <Image />
            </Img>
          </Images>
          <Content>
            <Logo />
            <Paragraph>
               ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.
            </Paragraph>
            <Button width="9.75rem" value="Ler mais" />
          </Content>

        </Flex>
        {/* <SectionSep /> */}
      </Container>
    </Section>
  )
}

export default About