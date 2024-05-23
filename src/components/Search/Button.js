import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  border-radius: 3rem;
  background-color: var(--asset);
  color: var(--white);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
  cursor: pointer;
  width: 8.4375rem;
  height: 2.25rem;
  position: absolute;
  font-size: 0.875rem;
  right: 0.1875rem;
`

const Button = () => {
  return (
    <Container >
      <i className='fas fa-magnifying-glass' ></i>
      Pesquisar
    </Container>
  )
}

export default Button