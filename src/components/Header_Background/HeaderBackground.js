import React from 'react'
import styled from 'styled-components'
import Filter from '../Filter/Filter'

export const imageUrl = '/images/header_background.jpg'

export const Background = styled.div`
  background-image: url( ${ props => props.imageUrl } );
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-attachment: ${ props => props.attachment };
`

const HeaderBackground = ({ children, attachment }) => {
  return (
    <Background imageUrl={imageUrl} attachment={ attachment }>
      <Filter position="absolute" />
      { children }
    </Background>
  )
}

export default HeaderBackground