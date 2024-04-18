import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  border: none;
  background: ${ props => props.background };
  color: ${ props => props.color };
  border-radius: 3rem;
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0.875rem 1rem;
  letter-spacing: .1rem;
  width: ${ props => props.width } ;
  height: ${ props => props.height };
  cursor: pointer;
  transition: .3s;
  &:hover {
    background: ${ props => props.hover_background};
    scale: 1.03;
  }
`

const Button = ({ value, width, height, background = "#FCCB0A", color, onClick, hover_background = "#FFFF45" }) => {
  return (
    <Container hover_background={ hover_background } onClick={ onClick } width={ width } height={ height } background={ background } color={ color } >{ value }  </Container>
  )
}

export default Button