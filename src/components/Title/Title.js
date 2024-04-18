import React from 'react'
import styled from 'styled-components'

const Container = styled.h1`
  color: ${ props => props.admin ? "#e5e5e5" : "#777272" } ;
  font-size: ${ props => props.admin ? "1.6rem" : "5.75rem" };
  letter-spacing: .1rem;
  margin-left: ${ props => props.admin ? "0" : "2.5rem" };
  margin-left: ${ props => props.left };
  position: relative;
  display: block;
  z-index: 1;
  &::before {
    content: '';
    display: inline-block;
    width: ${ props => props.admin ? "0.625rem" : "3.9375rem" };
    height: ${ props => props.admin ? "0.625rem" : "3.9375rem" };
    border-radius: ${ props => props.admin ? "0.125rem" : "0.625rem" };
    background: var(--yellow);
    position: absolute;
    top: ${ props => props.admin ? "1rem" : "3rem" };
    left: ${ props => props.admin ? "-0.125rem" : "-2rem" };
    z-index: -1;
  }
`

const Title = ( { value, left, admin = false }) => {
  return (
    <Container left={ left } admin={ admin }>
        { value }
    </Container>
  )
}

export default Title