import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  color: var(--label);
  display: flex;
  flex-direction: column;
  gap: .5rem;
  font-family: Montserrat;
  letter-spacing: .01rem;
`

const Inp = styled.input`
  background: none;
  border: var(--input) solid 1px;
  border-radius: 4rem;
  padding: .5rem 1rem;
  font-size: 18px;
  display: flex;
  justify-items: center;
  font-family: Montserrat;
  letter-spacing: .01rem;
  width: 28rem;
`

const Input = ({ value, label, placeholder, name, type, onChange }) => {
  return (
    <Label>
      { label }
      <Inp type={type} onChange={onChange} name={name} value={value} placeholder={placeholder} ></Inp>
    </Label>
  )
}

export default Input