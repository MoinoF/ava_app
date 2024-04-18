import React from 'react'
import styled from 'styled-components'
import Title from '../Title/Title'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import GalleryPage from './GalleryPage'


const Section = styled.section`
  background: var(--background_dark);
  min-height: 100vh;
  padding-top: 5rem;
  padding-bottom: 10rem;
`

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  position: relative;
`

const Gallery = () => {

 
  return (
    <Section>

      <Title left="7.5rem" value="Galeria" />
      <Container>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<GalleryPage />} />
        </Routes>
      </Container>
    </Section>
  )
}

export default Gallery