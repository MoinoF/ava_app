import React from 'react'
import styled from 'styled-components'
import ImageLink from './ImageLink'
import StudioImage from '../../assets/images/estudio_gallery.jpg'
import OutdoorImage from '../../assets/images/outdoos_galery.jpg'
import WeddingImage from '../../assets/images/weddings_gallery.jpg'
import BirthdayImage from '../../assets/images/birthdays_gallery.jpg'

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
`

const Home = () => {
  return (
    <Container>
    <ImageLink to={'/gallery/studio'} label_color="#EC250E" label="Estúdio" image_src={ StudioImage } />
    <ImageLink to={'/gallery/outdoors'}  label_color="#0A8BFC" label="Externas" image_src={ OutdoorImage } />
    <ImageLink to={'/gallery/weddings'}  label_color="#ECE5E5" label="Casamentos" image_src={ WeddingImage } />
    <ImageLink to={'/gallery/birthdays'}  label_color="#FCCB0A" label="Aniversários" image_src={ BirthdayImage } />
  </Container>
  )
}

export default Home