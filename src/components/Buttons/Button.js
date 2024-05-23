import React from 'react'
import styled from 'styled-components'

export const Container = styled.button`
  height: 2.5rem;
  width: ${ props => props.width };
  border-radius: 3rem;
  border: none;
  background: var(--asset);
  color: #DED6D6;
  font-weight: bold;
  font-size: 0.875rem;
  letter-spacing: .1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 1.25rem;
`

const Button = ({ text, onClick, width = "10rem", icon }) => {
  return (
    <Container width={ width } onClick={ onClick }>
      { text }
      <i className={ icon }></i>
    </Container>
  )
}

export default Button