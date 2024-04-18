import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--red);
  mix-blend-mode: multiply;
  position: ${ props => props.position };
  top: ${ props => props.top };
  left: 0;
`

const BlackFilter = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, ${ props => props.alpha ? props.alpha : ".25"});
`



const Filter = ({ position, alpha }) => {
  return (
    <Container position={ position } >
      <BlackFilter alpha={ alpha } />
    </Container>
  )
}

export default Filter