import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: ${ props => props.block ? "13.75rem" : "16rem" };
  height: ${ props => props.block ? "13.75rem" : "8.25rem" };
  background: var(--input);
  border-radius: .5rem;
`

const HeaderImagePreview = ({ block = false }) => {
  return (
    <Container block={ block }>
      
    </Container>
  )
}

export default HeaderImagePreview