
import React from 'react';
import styled from 'styled-components';
import LogoSvg from '../../assets/svg/logoSvg';
import OpenHour from '../open_hour/OpenHour';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 2rem;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin-right: 2.5rem;
  font-size: 14px;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderNav = () => {
  return (
    <Container>
      <Nav>
        <LogoSvg />
        <Ul>
          <Li><Link to='/'>Inicio</Link></Li>
          <Li><Link to='/about'>Sobre</Link></Li>
          <Li><Link to='/gallery'>Galeria</Link></Li>
          <Li><Link to='/prices'>Preços</Link></Li>
          <Li><Link to='/packages'>Pacotes</Link></Li>
          <Li><Link to='/contact'>Contacto</Link></Li>
        </Ul>
      </Nav>
        <RightContent>
          <OpenHour value="Seg. - Seg. 08h:00h - 18:00h" />
          <Link to='/login' >
            <Button value="Login" />
          </Link>
        </RightContent>
    </Container>
  );
};

export default HeaderNav;
