import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Paragraph = styled.p`
  color:#DED6D6;
  font-size: 0.875rem;
`

const AnAccount = ({ to, text, text_link }) => {

  const link_styles = {
    color: "#E8D800",
    fontWeight: "bold",
    fontSize: "1.125rem"
  }

  return (
    <Paragraph>
      { text }
      <Link style={ link_styles } to={ to } > { text_link } </Link>
    </Paragraph>
  )
}

export default AnAccount