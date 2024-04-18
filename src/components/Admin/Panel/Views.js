import React from 'react'
import styled from 'styled-components'
import Title from '../../Title/Title'
import Tweak from '../Tweak'

const Container = styled.div``

const Tweeks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  grid-row-gap: 4rem;
  margin-top: 2.5rem;
`

const Views = () => {
  return (
    <Container>
      <Title value={'views'} admin={true} />
      <Tweeks>
        <Tweak label={'total'} value={'0'} />
        <Tweak label={'semanais'} value={'0'} />
        <Tweak label={'mensais'} value={'0'} />
        <Tweak label={'anuais'} value={'0'} />

      </Tweeks>
    </Container>
  )
}

export default Views