import React from 'react'
import styled from 'styled-components'
import AllImages from '../AllImages'
import Title from '../../Title/Title'

const Section = styled.section`
  max-width: 72rem;
  margin: 0 auto;
  padding: 5.625rem 2.5rem 5.625rem 0.9375rem;
  position: absolute;
  left: 18rem;
  right: 0;
  background: #0A0000;
  padding-left: 3.5rem;
`


const Progects = () => {
  return (
    <Section>
      <Title value={'Imagens'} admin={true} />
      <AllImages />
    </Section>
  )
}

export default Progects