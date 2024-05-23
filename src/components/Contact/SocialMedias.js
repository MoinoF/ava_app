import React from 'react'
import styled from 'styled-components'

const Container = styled.ul`
  display: grid;
  grid-gap: .1rem;
`

const Item = styled.li`
`

const Link = styled.a`
  color: var(--white);
`

const SocialMedias = () => {
  return (
    <Container>
      <Item>
        <Link href='https://www.contact.com' target='_blanck'><i className='fas fa-phone'></i></Link>
      </Item>
      <Item>
        <Link href='https://www.whatsapp.com' target='_blanck'><i className='fab fa-whatsapp'></i></Link>
      </Item>
      <Item>
        <Link href='https://www.facebook.com' target='_blanck'><i className='fab fa-facebook'></i></Link>
      </Item>
      <Item>
        <Link href='https://www.instagram.com' target='_blanck'><i className='fab fa-instagram'></i></Link>
      </Item>
    </Container>
  )
}

export default SocialMedias