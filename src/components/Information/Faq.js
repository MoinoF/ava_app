import React from 'react'
import MenuNav from '../MenuNav/MenuNav'
import DynamicCard from './DynamicCard'
import { Container, Section } from './Licence'

const Faq = () => {

  const data = [
    {
      title: "O que é um fundo PSD personalizável?",
      text: "Um fundo PSD personalizável é um arquivo no formato PSD (Adobe Photoshop) que contém camadas editáveis, permitindo que você personalize o fundo de acordo com suas necessidades. Você pode ajustar cores, adicionar elementos e fazer outras modificações para criar o cenário perfeito para suas fotos ou projetos."
    },
    {
      title: "Como faço para comprar um fundo PSD?",
      text: "Para comprar um fundo PSD, basta navegar pela nossa coleção de fundos disponíveis e selecionar o(s) fundo(s) que deseja comprar. Adicione-os ao seu carrinho e siga as instruções para concluir a compra. Após o pagamento, você receberá um link para fazer o download do arquivo PSD."
    },
    {
      title: "Posso usar os fundos PSD para projetos comerciais?",
      text: "Sim, você pode usar os fundos PSD para projetos comerciais, desde que respeite os termos de uso. Recomendamos que você leia atentamente os termos de uso incluídos com cada fundo PSD para garantir que está em conformidade com as restrições de uso."
    },
    {
      title: "Posso editar os fundos PSD depois de comprá-los?",
      text: "Sim, os fundos PSD são totalmente editáveis e você pode personalizá-los de acordo com suas necessidades. Sinta-se à vontade para ajustar cores, adicionar elementos, remover elementos e fazer outras modificações para criar o cenário perfeito para suas fotos ou projetos."
    },
    {
      title: "Qual é a diferença entre os pacotes de fundos PSD?",
      text: "Os pacotes de fundos PSD podem variar em termos de quantidade e variedade de fundos incluídos. Alguns pacotes podem conter uma seleção específica de fundos com um tema comum, enquanto outros podem oferecer uma ampla variedade de estilos e temas. Escolha o pacote que melhor atenda às suas necessidades e preferências."
    }
  ]

  const desc = "Bem-vindo à nossa página de Perguntas Frequentes (FAQ)! Aqui você encontrará respostas para algumas das perguntas mais comuns sobre nossos serviços e produtos. Se você tiver alguma dúvida que não esteja listada aqui, não hesite em nos contatar. Estamos sempre prontos para ajudar!"

  const conclusion = "Esperamos que essas respostas tenham esclarecido suas dúvidas! Se você precisar de mais informações ou assistência, não hesite em entrar em contato conosco. Estamos aqui para ajudar!"

  return (
    <Section>
      <MenuNav />
      <Container>
      <DynamicCard title="Perguntas Frequentes (FAQ)" desc={ desc } data={ data } conclusion={ conclusion } />
      </Container>
    </Section>
  )
}

export default Faq