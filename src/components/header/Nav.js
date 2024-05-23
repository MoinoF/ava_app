import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/svg/small Logo.svg'
import { link_styles } from '../../modules/link_styles'

const Container = styled.nav`
  display: flex;
  align-items: center;
  grid-gap: 2.5rem;
  justify-content: space-between;
`

const LeftItems = styled.div``

export const Items = styled.ul`
  display: flex;
  grid-gap: 2.5rem;
  align-items: center;
`

export const Item = styled.li`
  
`

const RightItems = styled.ul``


const Nav = () => {


  return (
    <Container>
      
      <LeftItems>
        <Items>
          <Item>
            <NavLink  to='/' ><img src={ Logo } alt="Ava logo" /></NavLink>
          </Item>
          <Item>
            <NavLink style={ link_styles.normal } to='/backgrounds' >Fundos</NavLink>
          </Item>
          <Item>
            <NavLink style={ link_styles.normal } to='/PNG' >PNG</NavLink>
          </Item>
          <Item>
            <NavLink style={ link_styles.normal } to='/presets' >Presetes</NavLink>
          </Item>
        </Items>
      </LeftItems>

      <RightItems>
      <Items>
          <Item>
            <NavLink style={ link_styles.prices } to='/prices' >Preços</NavLink>
          </Item>
          <Item>
            <NavLink style={ link_styles.normal } to='/login' >Entrar</NavLink>
          </Item>
          <Item>
            <NavLink style={ link_styles.button } to='/signup' >Cadastrar</NavLink>
          </Item>
        </Items>
      </RightItems>

    </Container>
  )
}

export default Nav