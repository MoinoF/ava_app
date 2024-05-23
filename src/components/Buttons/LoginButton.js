import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  height: 3.75rem;
  padding: 0 1.25rem 0 1.25rem;
  width: 100%;
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

const Button = ({ text, onClick, icon }) => {
  return (
    <Container onClick={ onClick }>
      { text }
      <i style={{justifySelf: "flex-end"}} className={ icon }></i>
    </Container>
  )
}

export default Button