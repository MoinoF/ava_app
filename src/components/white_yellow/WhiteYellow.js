import React from 'react'
import styled from 'styled-components'

const Container = styled.h2`
  color: ${ props => props.value_color } ;
`

const Yellow = styled.span`
  color: ${ props => props.yellow_value_color } ;
`

const WhiteYellow = ({ value, yellow_value, value_color, yellow_value_color }) => {
  return (
    <Container value_color={ value_color } >
      { value }
      <Yellow yellow_value_color={yellow_value_color} > 
        { yellow_value } 
      </Yellow>
    </Container>
  )
}

export default WhiteYellow