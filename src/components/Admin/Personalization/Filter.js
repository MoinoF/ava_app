import React from 'react'
import styled from 'styled-components'
import DynamicUpdateCard from '../DynamicUpdateCard'

const Container = styled.div`
`

const Filter = () => {
  return (
    <Container>
      <DynamicUpdateCard subtitle={'Bloco Fixo'} />
    </Container>
  )
}

export default Filter