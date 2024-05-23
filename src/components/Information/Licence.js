import React from "react";
import styled from 'styled-components'
import DynamicCard, { Subtitle } from "./DynamicCard";
import DynamicButton from "../Buttons/DynamicButton";
import MenuNav from "../MenuNav/MenuNav";

export const Section = styled.section`
` 

export const Container = styled.div`
  padding: 3.75rem 8.125rem;

`

export const List = styled.ul`
`

export const Item = styled.li`
  font-size: 0.875rem;
  margin-top: 0.625rem;
  color: #707070;

  &&::before {
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    background: var(--asset);
    display: inline-block;
    content: "";
    margin-bottom: 2px;
    margin-right: 1rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  grid-gap: 1rem;
`


const Licence = () => {

  const desc = "Ao adquirir e fazer o download de qualquer fundo PSD de nossa plataforma, você concorda com os seguintes termos de licença:"

  const data_1 = [
    {
      title: "Uso Autorizado",
      text: "Você tem permissão para usar os fundos PSD em projetos pessoais, comerciais e de clientes, sujeito aos termos desta licença."
    }, 
    { 
      title: "Edição e Modificação",
      text: "Você pode editar, modificar e personalizar os fundos PSD de acordo com suas necessidades e preferências."
    }
  ]

  const list = [
    "Você não pode revender, redistribuir ou sublicenciar os fundos PSD, seja na sua forma original ou como parte de um produto derivado.",
    "Você não pode usar os fundos PSD de maneira que viole os direitos autorais, direitos de propriedade intelectual ou outras leis aplicáveis."
  ]

  const data_2 = [
    {
      title: "Uso em Mídias",
      text: "Você pode usar os fundos PSD em uma ampla variedade de mídias, incluindo, mas não se limitando a, fotografia, design gráfico, web design, impressão, publicidade e muito mais."
    },
    { 
      title: "Responsabilidade",
      text: `Os fundos PSD são fornecidos "no estado em que se encontram" e não oferecemos garantias quanto à sua adequação para qualquer finalidade específica. Você assume total responsabilidade pelo uso dos fundos PSD.`
    }, 
    {
      title: "Direitos Autorais",
      text: "Todos os direitos autorais e direitos de propriedade intelectual relacionados aos fundos PSD permanecem com seus respectivos proprietários e criadores."
    }
  ]

  const conclusion = "Ao fazer o download e usar os fundos PSD, você concorda em respeitar os termos desta licença. Qualquer violação dos termos desta licença pode resultar em ações legais."


  return (
    <Section>
      <MenuNav />
      <Container>
        <DynamicCard title="Licença de Uso" desc={ desc } data={ data_1 } />
        <List>
          <Subtitle >Uso Restrito</Subtitle>
          {
          list.map(( item, index ) => (
              <Item key={ index} >{ item }</Item>
            ))
          } 
        </List>
        <DynamicCard data={ data_2 } conclusion={ conclusion } />
        <Buttons>
          <DynamicButton border={ true } text="Rejeitar" />
          <DynamicButton text="Aceitar" />
        </Buttons>
      </Container>
    </Section>
  )
  
}


export default Licence