import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import Textarea from './TextArea'
import Button from '../Button/Button'

const Container = styled.form`
  display: flex;
  margin-top: 3.75rem;
  grid-gap: 2.5rem;
  flex-wrap: wrap;
`

const ButtonContainer = styled.div`
  place-self: flex-end;
`

const Form = ({onClick}) => {
  return (
    <Container onClick={onClick}>

      <Input label={"Nome"} placeholder={"Nome"} name={"name"} type={"text"} />

      <Input label={"Email"} placeholder={"Email"} name={"email"} type={"email"} />

      <Textarea label={"Messagem"} placeholder={"Escreva a mensagem aqui"} name={"message"} />

      <ButtonContainer>
        <Button value={"Enviar"} width={"9.75rem"} height={"3.875rem"} />
      </ButtonContainer>

    </Container>
  )
}

export default Form