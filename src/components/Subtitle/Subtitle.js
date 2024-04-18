import React from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
  color: var(--label);
  font-size: 1.5rem;
  text-align: center;
`

const Subtitle = ( { value }) => {
  return (
    <H2>{ value }</H2>
  )
}

export default Subtitle