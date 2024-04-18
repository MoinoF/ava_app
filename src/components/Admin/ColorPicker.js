

import React from 'react';
import styled from 'styled-components';

const ColorInputWrapper = styled.label`
  position: relative;
  border: 1px solid var(--input);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4rem;
  background: none;
  color: var(--input);
  transition: .3s;
  margin-top: ${ props => props.mt };

  && {
    border-radius: 4rem; /* Aumentando a especificidade */
  }

  &:hover {
    background-color: var(--input);
    color: #000;
  }

  .icon {
    margin-right: 5px;
  }
`;

const ColorInput = styled.input.attrs({ type: 'color' })`
  display: none;
`;

const ColorContainer = styled.span`
  /* position: absolute;
  top: 5px;
  right: 0; */
  display: inline-block;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: var(--red);
`

const ColorPicker = ({ onChange, value, mt }) => {
  // const handleColorChange = (event) => {
  //   const newColor = event.target.value;
  //   onChange(newColor);
  // };

  return (
    <>
      <ColorInputWrapper mt={mt} htmlFor="color-picker">
        { value }
        <ColorContainer ></ColorContainer>
      </ColorInputWrapper>
      <ColorInput id="color-picker"  />
    </>
  );
};

export default ColorPicker;
