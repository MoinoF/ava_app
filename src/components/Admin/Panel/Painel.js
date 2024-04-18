import React from 'react'
import styled from 'styled-components'
import Views from './Views'
import MostPopulars from './MostPopulars'
import RecentlyUploaded from './RecentlyUploaded'



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


const Painel = () => {
  return (
    <Section>
      <Views />
      <MostPopulars />
      <RecentlyUploaded />
    </Section>
  )
}

export default Painel