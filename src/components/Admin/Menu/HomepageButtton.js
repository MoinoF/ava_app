import React from 'react'
import styled from 'styled-components'
import LeftIcon from '../../../assets/svg/left_Svg'
import { Link } from 'react-router-dom'

const Container = styled.div`
  margin-left: 2.5rem;
  margin-top: 1.375rem;

`

const Text = styled.p`
  color: #e6e6e6;
  letter-spacing: .1rem;
`

const HomepageButtton = () => {

  const styles = {
    display: "flex",
    gridGap: "2.6rem",
    alignItems: "center"
  }

  return (
    <Container>
      <Link to='/' style={styles} >
        <LeftIcon />
        <Text>Inicio</Text>
      </Link>
    </Container>
  )
}

export default HomepageButtton