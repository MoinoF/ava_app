import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: 3.75rem;
  display: grid;
  grid-gap: 2rem;
  justify-content: center;
`

const Text = styled.p`
  max-width: 33.125rem;
`

const Welcome = () => {
  return (
    <Section>
      <Text>
        Bem vindo ao <b>AVA</b>, o destino definitivo para <b>fundos PSD customizaveis </b> que transformarão suas fotografias em <b>obras de arte inspiradoras!</b>
      </Text>
      <Text>
        Nossa coleção cuidadosamente selecionada de <b>fundos PSD</b> oferece uma <b>variedade de estilos, temas e cenários</b> para atender a todas suas <b>necessidades criativas.</b>
      </Text>
    </Section>
  )
}

export default Welcome