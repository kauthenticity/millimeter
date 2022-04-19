import React from 'react'
import styled from 'styled-components'
import { FiInstagram } from "react-icons/fi"
import { SiNaver } from 'react-icons/si';
import './Footer.css'
const Footer = () => {
  return (
    <FooterContainer>
      <InfoContainer>
        <LeftContainer>
          <FlexItem>Company. Wear Weather</FlexItem>
          <FlexItem>Owner. Kim InJae</FlexItem>
        </LeftContainer>

        <LeftContainer>
          <FlexItem>Tel. 010-4818-9723</FlexItem>
          <FlexItem2>E-Mail. wearweather@naver.com</FlexItem2>
        </LeftContainer>

        <LeftContainer>
          <FlexItem>Business License. 737-23-00533</FlexItem>
          <FlexItem2>
            Mail-Order License. 제2018-Daegu Dong-gu-0259 [사업자정보확인]
          </FlexItem2>
        </LeftContainer>

        <LeftContainer>
          <FlexItem2>
            Address. 41185 대구광역시 동구 아양로41길 23 (신암동) 2층
          </FlexItem2>
        </LeftContainer>
      </InfoContainer>

      <ContactContainer>
        <RightContainer>
          <ContactItem>
            <FiInstagram className="menu-icon" />
            Instagram
          </ContactItem>
          <ContactItem>
            <SiNaver className="menu-icon" />
            Blog
          </ContactItem>
        </RightContainer>
        <RightContainer>
          <ContactItem>Guide</ContactItem>
          <ContactItem>Privacy Policy</ContactItem>
          <ContactItem>Agreetment</ContactItem>
        </RightContainer>
      </ContactContainer>
    </FooterContainer>
  );
}

export default Footer

const RightContainer = styled.div`
  display: flex;
  font-size: 12px;
  margin-bottom: 5px;
  justify-content : flex-end; 
`;
const ContactItem = styled.div`
  margin-right: 3vw;
  
`;
const ContactContainer = styled.div`
  position : absolute;
  bottom : 0;
  right : 0;
`;
const InfoContainer = styled.div`

`
const FlexItem = styled.div`
  margin-left : 3vw;
  margin-right : 1vw;
  width : 12vw;
`;
const FlexItem2 = styled.div`
  margin-left: 3vw;
  margin-right: 1vw;
`;
const LeftContainer = styled.div`
  display : flex;
  font-size : 12px;
  margin-bottom : 5px;

`
const FooterContainer = styled.div`
  width : 100vw;
  max-width : 100%;
  min-height : 5vh;
  color : #121212;
  display : flex;
  justify-content : space-between;
  position : absolute;
  bottom : 1vh; 
`