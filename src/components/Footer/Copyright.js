import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/svg/small Logo.svg'

const Container = styled.div`
  padding: 2.5rem 2.5rem;
  color: #ded6d6;
  display: flex;
  grid-gap: 1rem;
`


const Copyright = () => {

  return (
    <Container>
      <img src={ Logo } alt='AVA logo' />
      Copyright 
      <i className='fas fa-copyright'></i>
      { new Date().getFullYear() }
    </Container>
  )
}

export default Copyright