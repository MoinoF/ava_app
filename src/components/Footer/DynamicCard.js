import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import { Link } from 'react-router-dom'

const Container = styled.div`
  max-width: 18rem;
`

const Links = styled.div`
  display: grid;
  grid-gap: 1.125rem;
`

const DynamicCard = ({ title, links = [], texts = [] }) => {

  const link_styles = {
    color: "#988b8b",
  }

  return (
    <Container>
      <Title text={ title } />
      <Links>
        {
          texts && links && 
          links.map(( link, index ) => (
            <Link style={ link_styles } key={ link } to={ link } >{ texts[ index ] }</Link>
          ))
        }
      </Links>
    </Container>
  )
}

export default DynamicCard