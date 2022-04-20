import React from "react";
import styled from "styled-components";
import { FiInstagram } from "react-icons/fi";
import { SiNaver } from "react-icons/si";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const onClickIg = () => {
    window.open("https://www.instagram.com/wearweather/");
  };
  const onClickBlog = () => {
    window.open("https://blog.naver.com/wearweather");
  };
  return (
    <FooterContainer>
      <LeftContainer>
        <FlexWrapper>
          <FlexItem>Company. Wear Weather</FlexItem>
          <FlexItem2>Owner. Kim InJae</FlexItem2>
        </FlexWrapper>

        <FlexWrapper>
          <FlexItem>Tel. 010-4818-9723</FlexItem>
          <FlexItem2>E-Mail. wearweather@naver.com</FlexItem2>
        </FlexWrapper>

        <FlexWrapper>
          <FlexItem2>
            Address. 41185 대구광역시 동구 아양로41길 23 (신암동) 2층
          </FlexItem2>
        </FlexWrapper>
      </LeftContainer>

      <MiddleContainer>
        <Account>Bank Account. NH 351-1990-0723-13 (김인재)</Account>
        <Customercenter>Customer Center. 010-4818-9723</Customercenter>
        <div style={{ fontSize: "0.5rem" }}>
          Mon-Fri AM 10:00 ~ PM 04:00 &nbsp; Lunch Time PM 12:00 ~ PM 01:00
          <br />
          Sat.Sun.Holiday Closed
        </div>
      </MiddleContainer>

      <RightContainer>
        <A to="/guide">
          <FlexItem3>Guide</FlexItem3>
        </A>

        <A to="/privacypolicy">
          <FlexItem3>Privacy Policy</FlexItem3>
        </A>

        <A to="/agreetment">
          <FlexItem3>Agreetment</FlexItem3>
        </A>

        <IconWrapper>
          <FlexItem4 onClick={onClickIg}>
            <FiInstagram className="menu-icon" />
          </FlexItem4>
          <FlexItem4 onClick={onClickBlog}>
            <SiNaver className="menu-icon" />
          </FlexItem4>
        </IconWrapper>
      </RightContainer>
    </FooterContainer>
  );
};

export default Footer;
const A = styled(Link)`
  text-decoration: none;
  color: #121212;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const FlexItem4 = styled.div`
  width: 2vw;
  text-align: right;
  margin-top: 10px;
  justify-self: right;
  cursor: pointer;
`;
const FlexItem3 = styled.div`
  text-align: right;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3vw;
`;
const MiddleContainer = styled.div`
  font-size: 0.7rem;
  /* align-self: flex-end; */
  margin-bottom: 5px;
`;

const Account = styled.div`
  margin-bottom: 5px;
`;
const Customercenter = styled.div``;

const LeftContainer = styled.div`
  margin-left: 3vw;
`;
const FlexItem = styled.div`
  margin-right: 2vw;
  width: 10vw;
`;
const FlexItem2 = styled.div`
  margin-right: 1vw;
`;
const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
  /* justify-content: flex-end; */
`;
const FooterContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 5vh;
  color: #121212;
  display: flex;
  justify-content: space-between;
  padding : 3vh 0;
  font-size: 0.7rem;
`;
