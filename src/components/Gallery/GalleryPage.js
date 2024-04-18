import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Subtitle from './Subtitle'
import Image from './Image'
import ImageLink from './ImageLink'

const Section = styled.section``

const Container = styled.div``

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-gap: 1rem;
  margin-top: 3.75rem;
`

const GalleryPage = () => {

  const { pathname } = window.location

  const pathname_splited = pathname.split('/')
  const path = pathname_splited[ pathname_splited.length -1 ]

  let title = ''

  if ( path === 'studio' ) {
    title = 'Estúdio' 
  }

  if ( path === 'outdoors' ) {
    title = 'Externas' 
  }

  if ( path === 'weddings' ) {
    title = 'Casamentos' 
  }

  if ( path === 'birthdays' ) {
    title = 'Aniversários' 
  }

  return (
    <Section>
      <Container>
        <Header />
        <Subtitle value={ title } />
      </Container>
      <Images>
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </Images>
    </Section>
  )
}

export default GalleryPage