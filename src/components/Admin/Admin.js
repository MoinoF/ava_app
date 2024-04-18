import React from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'
import { Route, Routes } from 'react-router-dom'
import Painel from './Panel/Painel'
import Progects from './Progects/Progects'
import Statistics from './Statistics'
import Personalization from './Personalization/Personalization'

const Section = styled.section`
  background: #0A0000;
  color: #fff;

`

const Admin = () => {
  return (
    <Section>
      <Menu  />
      <Routes>
        <Route path='/' element={<Painel />}  />
        <Route path='/progects' element={<Progects />}  />
        <Route path='/statistics' element={<Statistics />}  />
        <Route path='/personalization' element={<Personalization />}  />
      </Routes>
    </Section>
  )
}

export default Admin