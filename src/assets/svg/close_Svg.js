import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const close_Svg = ({ fill }) => {
  return (
    <Container>
      <svg height="24" viewBox="0 -960 960 960" width="24" fill={ fill }><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
    </Container>
  )
}

export default close_Svg