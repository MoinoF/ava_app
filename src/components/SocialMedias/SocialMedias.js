import React from 'react'
import styled from 'styled-components'
import Title from '../Footer/Title'

const Container = styled.div`
  max-width: 18rem;
`

const Items = styled.ul`
  display: flex;
`

const Item = styled.li``

const SocialMedias = () => {
  return (
    <Container>
      <Title text={"Redes Sociais"} />
      <Items>
        <Item>
          <a  href='https://www.facebook.com' target="_blanck"> <i className='fab fa-facebook' ></i> </a>
        </Item>
        <Item>
          <a href='https://www.instagram.com' target="_blanck"> <i className='fab fa-instagram'></i> </a>
        </Item>
        <Item>
          <a href='https://www.pinterest.com' target="_blanck"> <i className='fab fa-pinterest'></i> </a>
        </Item>
        <Item>
          <a href='https://www.twitter.com' target="_blanck"> <i className='fab fa-twitter'></i> </a>
        </Item>
      </Items>
    </Container>
  )
}

export default SocialMedias