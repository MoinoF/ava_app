import React from 'react'
import styled from 'styled-components'

const Container = styled.label`
  font-size: 0.875rem;
  color: #e6e6e6;

`

const Inp = styled.textarea`
  font-size: 0.875rem;
  display: block;
  border-radius: 1rem;
  margin-top: 0.9375rem;
  padding: 0.625rem 1.25rem;
  border: none;
  width: 100%;
  &&::placeholder{
    color: #808080;
  };
  &&:focus {
    outline: var(--asset) solid 2px;
  }
`

const TextArea = ({ name, onChange, value, placeholder, label }) => {
  return (
    <Container>
      { label }
      <Inp name={ name } onChange={ onChange } value={ value } placeholder={ placeholder } rows={"5"} />
    </Container>
  )
}

export default TextArea