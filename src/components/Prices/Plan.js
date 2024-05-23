import React from 'react'
import styled from 'styled-components'
import PlanButton from '../Buttons/PlanButton'

const Container = styled.div`
  width: 15.8125rem;
  height: 24.8125rem;
  background: ${ props => props.premium ? "#111" : "#fff" };
  border-radius: .5rem;
  box-shadow: 0 15px 18px rgba(0, 0, 0, .1);
  color: ${ props => props.premium ? "#e6e6e6" : "#111" } ;
`

const Retangle = styled.div`
  background: ${ props => props.premium ? "#161515" : "#e6e6e6" };
  border-radius: .5rem .5rem 0 0;
  text-align: center;
  height: 15.3125rem;
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`

const Plann = styled.p`
  font-size: 0.875rem;
  font-weight: bold;
  letter-spacing: .1rem;
`

const Price = styled.h2``

const Period = styled.p``

const Vantage = styled.p`
  padding: 2rem 2.375rem;
  display: flex;
  grid-gap: 1rem;
`

const Plan = ({ plan, price, period, vantages, premium }) => {
  return (
    <Container premium={ premium }>
      <Retangle premium={ premium } >
        <Plann> { plan } </Plann>
        <Price>${ price }</Price>
        <Period>/{ period }</Period>
        <PlanButton text="Assinar" />
      </Retangle>
      <Vantage>
        <i className='fas fa-square-plus'></i>
        { vantages }
      </Vantage>
    </Container>
  )
}

export default Plan