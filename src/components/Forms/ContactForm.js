import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import TextArea from './TextArea'
import Button from '../Buttons/Button'

const Form = styled.form`
  margin-top: 2.125rem;
  display: grid;
  grid-gap: 2.5rem;
`

const ContactForm = () => {

  const handleSubmit = ( event ) => {
    event.preventDefault()
  }

  return (
    <Form onSubmit={ handleSubmit }>
      <Input label="Nome" placeholder="Seu nome" name="name" type="text" />
      <Input label="Email" placeholder="email@gmail.com" name="email" type="email" />
      <TextArea label="Mensagem" placeholder="Mensagem"  />
      <Button text="Enviar" icon="fas fa-arrow-right" />
    </Form>
  )
}

export default ContactForm