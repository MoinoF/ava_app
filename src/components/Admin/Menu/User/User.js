import React from 'react'
import styled from 'styled-components'
import ProfilePhoto from './ProfilePhoto'

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 1.625rem;
  left: 2.5rem;
`

const UserInfo = styled.div`
  color: #C2BBBA;
  position: relative;
  left: 1rem;
`

const UserName = styled.p`
  font-weight: bold;

`

const Email = styled.p``


const User = ({ user_name, email}) => {
  return (
    <Container>
      <ProfilePhoto />
      <UserInfo >
        <UserName>{ user_name }</UserName>
        <Email >{ email }</Email>
      </UserInfo>
    </Container>
  )
}

export default User