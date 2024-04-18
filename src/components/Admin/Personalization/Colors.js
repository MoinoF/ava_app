import React from 'react'
import styled from 'styled-components'
import Subtitle from '../Subtitle'
import GeneralColors from './GeneralColors'

const Container = styled.div`
    margin-top: 3.75rem;
`

const Content = styled.div``


const Colors = () => {
  return (
    <Container>
      <Subtitle value={'Colors'} />
      <Content>
        <GeneralColors />
      </Content>
    </Container>
  )
}

export default Colors