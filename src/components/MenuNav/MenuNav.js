import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/svg/small Logo.svg'
import { Link } from 'react-router-dom'
import { link_styles } from '../../modules/link_styles'
import { Items, Item } from '../Header/Nav'

const Container = styled.nav`
  background: var(--dark);
  padding: 0 2.5rem 0 2.5rem;
  width: 100%;
  height: 3.125rem;
  display: flex;
  align-items: center;
  grid-gap: 2.5rem;
  justify-content: space-between;
`

export const NavLogo = styled.img``


const MenuNav = () => {
  return (
    <Container>
      <Items>
        <Link to="/">
          <NavLogo src={ Logo } alt="Logotipo ava" />
        </Link>
        <Item><Link style={ link_styles.normal } to="/backgrounds" >Fundos</Link></Item>
        <Item><Link style={ link_styles.normal } to="/PNG" >PNG</Link></Item>
        <Item><Link style={ link_styles.normal } to="/presets" >Presetes</Link></Item>
      </Items>
      <Items>
        <Item><Link style={ link_styles.prices } to='/login'>Prices</Link></Item>
        <Item><Link style={ link_styles.normal } to='/login'>Entrar</Link></Item>
        <Item><Link style={ link_styles.button } to='/signup' >Cadastrar</Link></Item>
      </Items>
    </Container>
  )
}

export default MenuNav