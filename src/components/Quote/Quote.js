import React from 'react'
import styled from 'styled-components'
import Value from './Value'
import QuoteSep from '../Sep/QuoteSep'
import MiniQuote from './MiniQuote'

const Container = styled.div`
  position: relative;
 

`

const H1 = styled.h1`
  max-width: 28.125rem;
  font-size: 2.375rem;
  line-height: 3.9375rem;
  letter-spacing: .1rem;
  text-align: ${ props => props.align };
`


const Quote = ({ align, value_1, colored_1, value_2, colored_2, color_1, color_2, quote_value }) => {
  return (
    <Container>
      <H1 align={align}>

        <Value value={value_1} color={color_1} />
        <Value value={colored_1} color={color_2} />
        <Value value={value_2} color={color_1} />
        <Value value={colored_2} color={color_2} />

      </H1>
      <QuoteSep />
      {
        quote_value &&
        <MiniQuote value={quote_value} />
      }
    </Container>
  )
}

export default Quote