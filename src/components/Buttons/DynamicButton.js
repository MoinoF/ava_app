import React from 'react'
import { Container } from './Button'

const DynamicButton = ({ text, onClick, width = "10rem", border = false }) => {

  const style = {
    bordered: {
      background: "none",
      border: "2px #5C14C8 solid",
      color: "#5C14C8"
    },
    normal: {
      background: "#5C14C8",
    }
  }


  return (
    <Container style={ border ? style.bordered : style.normal } width={ width } onClick={ onClick }>
      { text }
    </Container>
  )
}

export default DynamicButton