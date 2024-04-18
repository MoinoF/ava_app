import React from 'react'
import styled from 'styled-components'
import ImageWithViews from '../ImageWithViews'
import Title from '../../Title/Title'

const Container = styled.div`
  margin-top: 5rem;
`

const Images = styled.div`
  margin-top: 2.5rem;
  display: flex;
  grid-gap: 2rem;
`

const RecentlyUploaded = () => {
  return (
    <Container>
      <Title value={'carregamentos recentes'} admin={true}  />
      <Images>
        <ImageWithViews views={'0'} />
        <ImageWithViews views={'0'} />
        <ImageWithViews views={'0'} />
        <ImageWithViews views={'0'} />
      </Images>
    </Container>
  )
}

export default RecentlyUploaded