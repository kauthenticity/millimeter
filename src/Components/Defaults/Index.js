import React from "react";
import styled from "styled-components";
import main from "../../Assets/Image/main.jpg";

const Index = () => {
  return (
    <IndexContainer>
      <ImgContainer>
        <img src={main} alt="main" style={{ height: "60vh" }} />
      </ImgContainer>
    </IndexContainer>
  );
};

export default Index;

const ImgContainer = styled.div`
  margin: auto;
`;

const IndexContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 70vh;
  display: flex;
`;
