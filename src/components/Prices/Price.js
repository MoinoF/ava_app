import React from 'react'
import styled from 'styled-components'
import PriceSep from '../Sep/PriceSep'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 1rem;
  justify-content: center;
`

const Category= styled.p`
  font-weight: bold;
  color: #1a1818;

`

const DescAmount = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  grid-gap: 1rem;
  color: #1a1818;
`

const Desc = styled.p``

const Amount = styled.span`
  display: inline-block;
  justify-self: flex-end;
  text-align: right;
`

const Price = ({ category, desc, amount }) => {
  return (
    <Container>
       <Category>
        {category}
       </Category>
        <PriceSep />
       <DescAmount>

        <Desc>
          {desc}
        </Desc>
        <Amount>
          {amount + "Mt"}
        </Amount>

       </DescAmount>
    </Container>
  )
}

export default Price