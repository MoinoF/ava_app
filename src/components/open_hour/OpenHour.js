import React from 'react'
import styled from 'styled-components'

const Container = styled.p`
    display: flex;
    grid-column-gap: 1rem;
    align-items: center;
    color: var(--white);
    font-weight: bold;
    font-size: 0.875rem;
    &::before {
        display: inline-block;
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #00C835;

    }

    margin-left: 4rem;
    margin-right: 2rem;
`

const OpenHour = ({ value }) => {
  return (
    <Container>{ value }</Container>
  )
}

export default OpenHour