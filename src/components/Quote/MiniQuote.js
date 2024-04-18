import React from 'react'
import styled from 'styled-components'

const Container = styled.span`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
  font-size: 1.125rem;
  line-height: 1.625rem;
  display: inline-block;
  color: var(--mini_quote);
  max-width: 17rem;
  text-align: right;
  position: absolute;
  bottom: -7rem;
  right: 0;
`

const MiniQuote = ({ value }) => {
  return (
    <Container>{ value }</Container>
  )
}

export default MiniQuote