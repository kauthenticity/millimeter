import React from 'react'
import styled from 'styled-components'
import about from '../../Assets/Image/about.jpg'

const About = () => {
  return (
    <AboutContainer>
      <ImgContainer>
        <img src={about} alt="about" height={"100%"}></img>
      </ImgContainer>

      <DescriptionContainer>
        <TitleContainer>Wear Weather</TitleContainer>
        <Description>
          웨어웨더는 간결하고 여성스러운 실루엣을 기반으로, 유행을 타지 않는
          클래식한 디자인을 선보입니다.
        </Description>
        <Description>어쩌구 저쩌구.</Description>

        <ExternalLink>Instagram</ExternalLink>

        <ExternalLink>Blog</ExternalLink>
      </DescriptionContainer>
    </AboutContainer>
  );
}

export default About
const ExternalLink = styled.div`
  font-size : 13px;
`
const AboutContainer = styled.div`
  display : flex;
  margin-top : 8vh;
  padding : 0 15vw;
`

const ImgContainer = styled.div`
  height : 50vh;

`
const Description = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size : 13px;
  font-weight : 300;
`;
const TitleContainer = styled.div`
  margin-bottom : 1vh;
  font-size : 20px;
`
const DescriptionContainer = styled.div`
  margin-top : 7vh;
  padding-left : 2vw;
`