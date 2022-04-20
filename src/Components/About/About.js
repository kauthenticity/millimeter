import React from "react";
import styled from "styled-components";
import about from "../../Assets/Image/about.jpeg";

const About = () => {
  return (
    <AboutContainer>
      <ImgContainer>
        <img src={about} alt="about" height={"100%"}></img>
      </ImgContainer>

      <DescriptionContainer>
        <TitleContainer>Wear Weather</TitleContainer>
        <Description>
          간결하고 여성스러운 실루엣을 기반으로, 유행을 타지 않는 클래식한
          디자인을 선보입니다.
          <br />
          웨어웨더는 최대한 합리적인 가격 내에서 최고의 원단 및 봉제 퀄리티를
          갖습니다.
          <br />
          아름다운 실루엣이지만 불편하지 않은 옷을 지향합니다.
          <br />
          웨어웨더의 옷이 당신의 일상에 자연스러이 어우러지길 소망합니다.
        </Description>

        <InfoContainer>
          <InfoHeader>Information</InfoHeader>
          <InfoWrapper>
            <InfoKey>Owner.</InfoKey>
            <InfoValue>010-4818-9723</InfoValue>
          </InfoWrapper>
          <InfoWrapper>
            <InfoKey>Tel.</InfoKey>
            <InfoValue>010-4818-9723</InfoValue>
          </InfoWrapper>
          <InfoWrapper>
            <InfoKey>Email.</InfoKey>
            <InfoValue>wearweather@naver.com</InfoValue>
          </InfoWrapper>
          <InfoWrapper>
            <InfoKey>Business License.</InfoKey>
            <InfoValue>737-23-00533</InfoValue>
          </InfoWrapper>

          <InfoWrapper>
            <InfoKey>Mail-Order License.</InfoKey>
            <InfoValue>제2018-대구동구-0259 [사업자정보확인]</InfoValue>
          </InfoWrapper>
        </InfoContainer>

        <ExternalLinkContainer>
          <InfoHeader>More About us</InfoHeader>
          <InfoWrapper>
            <InfoKey>Instagram.</InfoKey>
            <InfoValue>@wearweather, @injae.ww</InfoValue>
          </InfoWrapper>

          <InfoWrapper>
            <InfoKey>Blog.</InfoKey>
            <InfoValue>blog.naver.com/wearweather</InfoValue>
          </InfoWrapper>
        </ExternalLinkContainer>
      </DescriptionContainer>
    </AboutContainer>
  );
};

export default About;
const InfoHeader = styled.div`
  font-size: 1rem;
  margin-bottom: 0.4rem;
`;
const InfoValue = styled.div``;
const InfoKey = styled.div`
  font-weight: bold;
  margin-right: 0.5rem;
`;
const InfoWrapper = styled.div`
  display: flex;
  line-height: 150%;
`;
const InfoContainer = styled.div`
  margin: 8vh 0;
`;

const ExternalLinkContainer = styled.div`
  margin-top: 5vh;
`;
const ExternalLink = styled.div``;
const AboutContainer = styled.div`
  display: flex;
  margin-top: 2vh;
  padding: 0 15vw;
  font-size: 0.7rem;
`;

const ImgContainer = styled.div`
  height: 70vh;
`;
const Description = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  line-height: 200%;
  font-weight: 400;
`;
const TitleContainer = styled.div`
  margin-bottom: 2vh;
  font-size: 20px;
`;
const DescriptionContainer = styled.div`
  margin-top: 7vh;
  padding-left: 2vw;
  height : ;
`;
