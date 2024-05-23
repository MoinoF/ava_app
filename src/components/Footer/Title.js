import React from 'react'
import styled from 'styled-components'

const Container = styled.h3`
  font-size: 0.875rem;
  color: #eeebeb;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
`

const Title = ({ text }) => {
  return (
    <Container>{ text }</Container>
  )
}

export default Title