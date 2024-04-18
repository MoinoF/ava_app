import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Label from './Label'


const Image = styled.img`
  object-fit: cover;
  transition: .3s;
  &:hover {
    scale: 1.05;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
  }
`


const ImageLink = ({ to, image_src, label, label_color }) => {
  return (

      <Link to={to}>
        <Image src={image_src} />
        <Label label_color={label_color} label={label} />
      </Link>

  )
}

export default ImageLink