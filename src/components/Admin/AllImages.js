import React from 'react'
import styled from 'styled-components'
import ImageWithViews from './ImageWithViews'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 2rem;
  margin-top: 2.5rem;
`

const AllImages = () => {
  return (
    <Container>
      <ImageWithViews />
      <ImageWithViews />
      <ImageWithViews />
      <ImageWithViews />
      <ImageWithViews />
      <ImageWithViews />
      <ImageWithViews />
      <ImageWithViews />
      <ImageWithViews />
      <ImageWithViews />
      <ImageWithViews />
      <ImageWithViews />
      <ImageWithViews />
      <ImageWithViews />
      <ImageWithViews />
      <ImageWithViews />
      <ImageWithViews />
    </Container>
  )
}

export default AllImages