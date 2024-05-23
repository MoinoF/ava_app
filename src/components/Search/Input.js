import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.label`
  display: flex;
  align-items: center;
  width: 39.375rem;
  height: 2.5rem;
  margin-top: 3.25rem;
  border-radius: 3rem;
  background: none;
  position: relative;
`


const Inp = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 4rem;
  border: none;
  padding-left: 1.25rem;
`

const Input = () => {
  return (
    <Container>
      <Inp placeholder='Pesquisar' />
      <Button />
    </Container>
  )
}

export default Input