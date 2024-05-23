import React from 'react'
import styled from 'styled-components'
import LeftItems from './LeftItems'
import RightItems from './RightItems'

const Section = styled.section`
  height: 100vh;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 35.25rem;
`

const Contact = () => {
  return (
    <Section className="background">
      <Container>
        <LeftItems social_medias={ true } />
        <RightItems />
      </Container>
    </Section>
  )
}

export default Contact