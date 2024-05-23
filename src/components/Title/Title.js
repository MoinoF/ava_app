import React from 'react'
import styled from 'styled-components'

const Container = styled.h3`
  color: ${ props => props.color } ;
  font-size: ${ props => props.size };
`

const Title = ({ text, color = "#efecec", size = "1.5rem" }) => {
  return (
    <Container size={ size } color={ color }>{ text }</Container>
  )
}

export default Title