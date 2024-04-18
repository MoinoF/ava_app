import React from 'react'
import styled from 'styled-components'
import Thunbnail from './Thunbnail'

const Container = styled.div`
  color: #fff;
  position: absolute;
  right: 0;
  top: -13rem;
  display: flex;
  grid-gap: 1.25rem;
`


const Header = () => {
  return (
    <Container>
      <Thunbnail to={ 'estudio' } />
      <Thunbnail to={ 'outdoors' } />
      <Thunbnail to={ 'weddings' } />
      <Thunbnail to={ 'birthdays' } />
    </Container>
  )
}

export default Header