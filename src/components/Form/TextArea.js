
import React from 'react'
import styled from 'styled-components'

const Container = styled.div``;

const Label = styled.label`

  color: #aaa;
  display: flex;
  flex-direction: column;
  gap: .5rem;

`;

const TextareaComp = styled.textarea`

  background: none;
  border: var(--input) solid 1px;
  border-radius: 1rem;
  padding: .5rem 1rem;
  font-size: 18px;
  display: flex;
  justify-items: center;
  font-family: Montserrat;
  width: 28rem;
`;

const Textarea = ({ type, value, onChange, name, label, placeholder }) => {
  return (
    <Container>

      <Label>
      {label}
        <TextareaComp type={type} onChange={onChange} name={name} value={value} placeholder={placeholder} rows={"6"} />
        
      </Label>
    </Container>
  )
}

export default Textarea