import React from 'react'
import styled from 'styled-components'
import Wireframe from './wireframe'

const Container = styled.div`
  padding: 3.75rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
  grid-column-gap: 1.125rem;
  grid-row-gap: 2.5rem;
`

const Backgrounds = () => {
  return (
    <Container>
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
      <Wireframe />
    </Container>
  )
}

export default Backgrounds