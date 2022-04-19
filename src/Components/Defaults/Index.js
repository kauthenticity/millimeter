import React from 'react'
import styled from 'styled-components'
import main from "../../Assets/Image/main.jpg";

const Index = () => {
  return (
    <IndexContainer>
      <ImgContainer>
        <img src={main} alt="main"/>
      </ImgContainer>
    </IndexContainer>
  )
}

export default Index

const ImgContainer = styled.div`
  margin : auto;
`

const IndexContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 80vh;
  display : flex;
`;