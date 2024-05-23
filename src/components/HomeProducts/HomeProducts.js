import React from 'react'
import styled from 'styled-components'
import CategoriesNav from '../CategoriesNav/CategoriesNav'
import Backgrounds from '../Products/Backgrounds/Backgrounds'

const Section = styled.section`
  padding: 3.75rem 2.5rem;
`

const HomeProducts = () => {
  return (
    <Section>
      <CategoriesNav />
      <Backgrounds />
    </Section>
  )
}

export default HomeProducts