import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import EyeIcon from '../../assets/svg/eye_svg'

const Container = styled.div`

`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 1rem;
  margin-top: 1.25rem;
`

const Views = styled.p``

const ImageWithViews = ({ views }) => {
  return (
    <Container>
      <Image />
      <Icon>
        <EyeIcon />
        <Views>{ views }</Views>
      </Icon>
    </Container>
  )
}

export default ImageWithViews