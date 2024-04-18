import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import User from './User/User'
import PanelIcon from '../../../assets/svg/timeline_Svg'
import ProgetsIcon from '../../../assets/svg/gallery_thumbnail_Svg'
import StatisticsIcon from '../../../assets/svg/bar_chart_4_bars_Svg'
import PersonalizeIcon from '../../../assets/svg/display_settings_Svg'
import Logo from '../../Logo/Logo'
import HomepageButtton from './HomepageButtton'

const Container = styled.div`
  height: 100vh;
  width: 18.25rem;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: #0A0000;
`

const Nav = styled.nav`
  margin-top: 6.25rem;
`

const NavList = styled.ul``

const List = styled.li`
  /* margin-bottom: 1rem; */
  &:hover {
    background: var(--div);
  }
`

const LogoContainer = styled.div`
  position: relative;
  bottom: -10rem;
  left: 2.5rem;
`

const Menu = () => {

  const styles = {
    padding: "1rem 0.625rem 1rem 2.5rem", 
    display: "flex", 
    gridGap: "1.5rem" 
  }

  return (
    <Container>
      <HomepageButtton />
      <User user_name={'boy scogo'} email={'scogo@scogo.com'} />
      <Nav>
        <NavList>
          <List>
            <NavLink style={ styles } to={''} >
              <PanelIcon />
              painel
            </NavLink>
          </List>
          <List>
            <NavLink style={ styles } to={'progects'} >
              <ProgetsIcon />
              progectos
            </NavLink>
          </List>
          <List>
            <NavLink style={ styles } to={'statistics'} >
              <StatisticsIcon />
              estatisticas
            </NavLink>
          </List>
          <List>
            <NavLink style={ styles } to={'personalization'} >
              <PersonalizeIcon />
              Personalização
            </NavLink>
          </List>
        </NavList>
      </Nav>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Container>
  )
}

export default Menu