import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const NoticeContent = ({ no }) => {
  const [notice, setNotice] = useState({});
  useState(() => {
    axios.get("/db/notices.json").then((res) => {
      var temp = res.data.filter((item) => item.no == no);
      setNotice(temp[0]);
    });
  }, []);
  return (
    <NoticeContentContainer>
      <ul>
        <TitleItem>
          <Subject>{notice.title}</Subject>
          {/* <Writer>{notice.writer}</Writer> */}
          <Date>{notice.date}</Date>
        </TitleItem>
        <DescriptionItem>{notice.description}</DescriptionItem>
        <ButtonItem>
          <A to="/notice">
            <Button>목록</Button>
          </A>
        </ButtonItem>
      </ul>
    </NoticeContentContainer>
  );
};
export default NoticeContent;
const A = styled(Link)`
  text-decoration: none;
  color: #121212;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  border: 1px solid #565656;
  padding: 0.8rem 2.8rem;
  font-family: "Lora";
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background: #232323;
    color: white;
  }
`;

const DescriptionItem = styled.li`
  padding: 3rem 1rem;
  border-top: 1px solid #565656;
  box-sizing: border-box;
  min-height: 35vh;
  display: flex;
  align-items: center;
`;
const Date = styled.div`
  width: 15%;
  text-align: right;
`;
const Writer = styled.div`
  width: 15%;
  text-align: right;
`;
const Subject = styled.div`
  width: 70%;
`;
const ButtonItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 0;
  border-top: 1px solid #121212;
  box-sizing: border-box;
`;
const TitleItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid #565656;
  box-sizing: border-box;
`;

const NoticeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 95%;
  font-size: 0.9rem;
`;
