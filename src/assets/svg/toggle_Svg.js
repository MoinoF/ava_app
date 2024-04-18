import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  cursor: pointer;
`

const toggle_Svg = ({size = "1.25rem", fill = "currentColor"}) => {

  const paths = {
    path_1 : "M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 0 0-1-3h4a3 3 0 1 1 0 6H9z",
    path_2 : "M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10z"
  }



  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fill} viewBox="0 0 16 16">

        <path d={paths.path_1}/>
        <path d={paths.path_2}/>
  
      </svg>
    </Container>
  )
}

export default toggle_Svg

