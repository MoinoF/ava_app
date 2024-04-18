import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import Button from '../Button/Button'
import LinkTo from '../Link/LinkTo'

const Container = styled.form`
  display: grid;
  grid-gap: 2.5rem;
`

const ParagraphLink = styled.p`
  color: var(--title);
  
`

const LoginForm = ({ data, login, subscribe }) => {

  

  const handleClick = (event) => {
    event.preventDefault()
  }

  return (
    <Container onClick={handleClick}>

      {
        data &&
        data.labels.map((item, index) => (

          <Input key={ item } label={ item } placeholder={data.placeholders[ index ]} name={data.names[ index ]} type={data.types[ index ]} />

        ))
      }

      <Button width="7.3125rem" value="Entrar" />
      {
        login &&
        <ParagraphLink>
           Ainda não possui uma conta?
            <LinkTo to={'/subscribe'} value={' Cadastrar'} />
        </ParagraphLink>
      }
      {
        subscribe &&
        <ParagraphLink>
           Possui uma conta?
            <LinkTo to={'/login'} value={' Login'} />
        </ParagraphLink>
      }
      <Button hover_background='#2496FB' background='#0A8BFC' value={"Continuar com google"} />
      <Button hover_background='#2496FB'  background='#0A8BFC' value={"Continuar com facebook"} />
    </Container>
  )
}

export default LoginForm