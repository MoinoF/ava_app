import React from 'react'
import styled from 'styled-components'
import PackageCard from './PackageCard'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 3rem;
`

const Studio = () => {

  const packages_datas = [
    { plan: "básico", amount: 500.00, total_photos: 5 },
    { plan: "standard", amount: 1500.00, total_photos: 10 },
    { plan: "premium", amount: 5000.00, total_photos: 20 },
  ]

  const styles = [
    { text_color: "#2D2B2B", sep_color: "#2D2B2B", background: "#e5e5e5", button_background:'#0a0a0a', button_color: '#e5e5e5', scale: 1 },
    { text_color: "#e5e5e5", sep_color: "#e5e5e5", background: "#0A0A0A", button_background:'#e5e5e5', button_color: '#0a0a0a', scale: 1.1 },
    { text_color: "#0A0000", sep_color: "#0A0000", background: "#FCCB0A", button_background:'#0a0a0a', button_color: '#e5e5e5', scale: 1 },
  ]

  return (
    <Container>
      {packages_datas.map((pack, index) => (
        <PackageCard
          key={pack.plan + index}
          scale={styles[index].scale}
          button_background={styles[index].button_background}
          button_color={styles[index].button_color}
          text_color={styles[index].text_color}
          sep_color={styles[index].sep_color}
          background={styles[index].background}
          button_value="Marcar"
          plan={pack.plan}
          amount={pack.amount}
          total_photos={pack.total_photos}
        />
      ))}
    </Container>
  )
}

export default Studio
