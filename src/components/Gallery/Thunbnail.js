import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 10.875rem;
  height: 10.875rem;
  background: var(--input);
  border-radius: 0.5rem;
  position: relative;
  z-index: 1;
`

const Thunbnail = ({ to }) => {

  return (
    <Link to={ to }>
      <Container></Container>
    </Link>
  )
}

export default Thunbnail