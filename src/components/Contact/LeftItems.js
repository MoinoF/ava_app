import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/svg/small Logo.svg'
import SocialMedias from './SocialMedias'
import { Link } from 'react-router-dom'



const Container = styled.div`
  padding: 6.625rem 0 0 2.5rem;
  display: grid;
  align-items: space-between;
`


const LeftItems = ({ social_medias }) => {

  const link_styles = {
    display: "block",
    width: "2rem",
    height: "1rem",
    padding: ".1rem",
  }

  return (
    <Container>
      <Link style={ link_styles } to="/" >
        <img src={ Logo } alt='ava logo' />
      </Link>
      {
        social_medias &&
        <SocialMedias />
      }
    </Container>
  )
}

export default LeftItems