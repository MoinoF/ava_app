import React from 'react'
import styled from 'styled-components'
import CloseIcon from '../../../assets/svg/close_Svg'
import SaveIcon from '../../../assets/svg/save_Svg'


const Container = styled.button`
  border: none;
  background: ${ props => props.save ? props.background : "none" };
  border: ${ props => props.discard ? "solid 2px #FCCB0A" : "none" };
  color: ${ props => props.color };
  border-radius: 3rem;
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0.875rem 1rem;
  letter-spacing: .1rem;
  width: 6.25rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .3s;
  &:hover {
    background: ${ props => props.save ? props.hover_background : "none" };
    border: ${ props => props.discard ? "solid 2px #FFFF45" : "none" };
    scale: 1.03;
  }
`

const Button = ({ background = "#FCCB0A", color, onClick, hover_background = "#FFFF45", save = null, discard = null }) => {

  console.log("save: " + save);
  console.log("discard: " + discard);

  return (
    <Container save={ save } discard={ discard } hover_background={ hover_background } onClick={ onClick } background={ background } color={ color } >
      {
        save &&
        <SaveIcon />
      } 

      {
        discard && 
        <CloseIcon fill={"#FCCB0A"} />
      }
    </Container>
  )
}

export default Button