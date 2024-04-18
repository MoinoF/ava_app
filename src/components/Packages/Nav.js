import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.nav`

`

const Ul = styled.ul`
  display: flex;
  grid-gap: 1rem;
  margin-top: 3.625rem;
`

const Li = styled.li`
  margin-left: 2rem;
`

const Nav = ({to_list = [], nav_list = []}) => {


  return (
    <Container>

      <Ul >
        { nav_list && to_list && 
          nav_list.map((item, index) => (
            <Li key={ index } >
              <NavLink to={to_list[index]}>{ item }</NavLink>
            </Li>
          ))
        }
      </Ul>
        
    </Container>
  )
}

export default Nav