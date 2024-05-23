import React from 'react'
import { Container } from './Button'

const PlanButton = ({ text, onClick, width = "10rem" }) => {

  const style = {
  boxShadow: "0 10px 18px rgba(0, 0, 0, .3)"
  }


  return (
    <Container style={ style } width={ width } onClick={ onClick }>
      { text }
    </Container>
  )
}

export default PlanButton