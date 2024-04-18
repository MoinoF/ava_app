import React from 'react'
import styled from 'styled-components'
import DynamicUpdateCard from '../DynamicUpdateCard'

const Container = styled.div``

const HeaderImage = () => {
  return (
    <Container>
      <DynamicUpdateCard subtitle={'Cabeçalho'} />
    </Container>
  )
}

export default HeaderImage