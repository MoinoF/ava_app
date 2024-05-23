import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.nav`
  width: 36.875rem;
  height: 2.5rem;
  background: var(--secondary);
  border-radius: 3rem;
`

const Items = styled.ul`
  display: flex;
  justify-content: space-between;
`

const Item = styled.li`
  width: 100%;
`

const CategoriesNav = () => {

  const link_styles = {
    normal: {
      display: "flex",
      justifyContent: "center",
      gridGap: "1rem",
      alignItems: "center",
      height: "2.5rem",
      borderRadius: "3rem",
      padding: "1rem",
      color: "#dfdfdf"
    }
  }

  return (
    <Container>
      <Items>
        <Item><NavLink style={ link_styles.normal } activeClassName={"active"} to={'/'}><i className="fas fa-image"></i>Fundos</NavLink></Item>
        <Item><NavLink style={ link_styles.normal } activeClassName={"active"}  to={'PNG'}>PNG</NavLink></Item>
        <Item><NavLink style={ link_styles.normal } activeClassName={"active"}  to={'presets'}>Presetes</NavLink></Item>
      </Items>
    </Container>
  )
}

export default CategoriesNav