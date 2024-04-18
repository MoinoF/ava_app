import React from 'react'
import { Link } from 'react-router-dom'

const LinkTo = ({ to, value }) => {
  return (
    <Link style={{ color: "#FCCB0A", marginTop: "1rem" }}  to={ to } >{ value }</Link>
  )
}

export default LinkTo