import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
  width: 100%;
  height: 3.75rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
`

const Text = styled.p``

const Ret = styled.span`
  width: 1.25rem;
  height: 0.375rem;
  background: ${ props => props.label_color };
`

const Label = ({label, label_color}) => {
  return (
    <Container>
      <Ret label_color={label_color}>
      </Ret>
      <Text>
        {label}
      </Text>
    </Container>
  )
}

export default Label