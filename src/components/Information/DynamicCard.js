import React from 'react'
import styled from 'styled-components'
import Title from '../Title/Title'

export const Container = styled.div`
`

export const Div = styled.div``

export const Paragraph = styled.p`
  margin-top: 0.625rem;
  color: #707070;
  font-size: 0.875rem;
`

export const Subtitle = styled.h3`
  font-weight: bold;
  font-size: ${ props => props.sub_size };
  margin-top: 2.5rem;
`

export const Conc = styled.p`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  color: #707070;
  font-size: 0.875rem;
`



const DynamicCard = ({ title, desc, data, conclusion, sub_size = "1.125rem" }) => {
  return (
    <Container>
      <Title text={ title } color="#5C14C8"/>
      <Paragraph>{ desc }</Paragraph>
      {
        data && 
        data.map(( item, index ) => (
          <Div key={ index }>
            <Subtitle sub_size={ sub_size }>{ item.title }</Subtitle>
            <Paragraph>{ item.text }</Paragraph>
          </Div>
        ))
      }
      <Conc>{ conclusion }</Conc>
    </Container>
  )
}

export default DynamicCard