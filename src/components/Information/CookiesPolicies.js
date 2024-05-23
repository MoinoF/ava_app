import React from 'react'
import { Buttons, Container, Item, List, Section } from './Licence'
import MenuNav from '../MenuNav/MenuNav'
import DynamicCard, { Conc, Paragraph, Subtitle } from './DynamicCard'
import Title from '../Title/Title'
import DynamicButton from '../Buttons/DynamicButton'

const CookiesPolicies = () => {

  const desc = "Nossa plataforma utiliza cookies para melhorar a experiência do usuário, personalizar conteúdos e anúncios, fornecer recursos de mídia social e analisar nosso tráfego. Abaixo, explicamos o que são cookies, como os utilizamos e suas opções de controle."

  const data_1 = [
    {
      title: "O que são cookies?",
      text: "Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita um site. Eles contêm informações sobre sua navegação e permitem que o site reconheça você em visitas subsequentes, tornando sua experiência mais eficiente e personalizada."
    }
  ]

  const data_2 = [
    {
      title: "Cookies Necessários",
      text: "Essenciais para o funcionamento do site, como autenticação de usuário e gerenciamento de sessões."
    },
    {
      title: "Cookies de Desempenho",
      text: "Nos ajudam a entender como os visitantes interagem com o site, fornecendo informações sobre áreas visitadas, tempo gasto no site e problemas encontrados."
    },
    {
      title: "Cookies de Funcionalidade",
      text: "Permitem que o site lembre suas preferências e personalizações, como idioma preferido e configurações de visualização."
    },
    {
      title: "Cookies de Publicidade",
      text: "São utilizados por parceiros de publicidade para exibir anúncios relevantes com base nos seus interesses e histórico de navegação."
    }
  ]

  const data_3 = [
    {
      title: "Opções de Controle de Cookies",
      text: "Você pode controlar e/ou excluir cookies conforme desejar. Para mais informações sobre como fazer isso, consulte a seção de ajuda do seu navegador ou dispositivos móveis. Por favor, esteja ciente de que a desativação de cookies pode afetar a funcionalidade e experiência de navegação em nosso site e em outros sites da web."
    }
  ]

  const conclusion = "Ao continuar a navegar em nosso site sem alterar suas configurações de cookies, você concorda com o uso de cookies conforme descrito acima."

  return (
    <Section>
      <MenuNav />
      <Container >
        <DynamicCard title="Policas de Cookies" desc={ desc } data={ data_1 } />
        <Title color="#202020" size="1.125rem" text="Como utilizamos os cookies?" />
        
          {
            data_2 && 
            data_2.map(( item, index ) => (
              <List key={ index }>
                <Subtitle sub_size="0.875rem" >{ item.title }</Subtitle>
                <Item >{ item.text }</Item>
              </List>
            ))
          }
        <Subtitle>{ data_3[0].title }</Subtitle>
        <Paragraph>{ data_3[0].text }</Paragraph>
        <Conc>{ conclusion }</Conc>
        <Buttons >
          <DynamicButton text="Rejeitar" border={ true } />
          <DynamicButton text="Aceitar" />
        </Buttons>
      </Container>
    </Section>
  )
}

export default CookiesPolicies