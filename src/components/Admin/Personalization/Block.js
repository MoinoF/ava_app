import React from 'react'
import styled from 'styled-components'

import DynamicUpdateCard from '../DynamicUpdateCard'

const Container = styled.div`
`

const Block = () => {
  return (
    <Container>
      <DynamicUpdateCard block={ true } subtitle={"Bloco"} filter={false} />
    </Container>
  )
}

export default Block