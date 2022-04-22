import React, { useState } from "react";
import styled from "styled-components";
import {RiPencilFill} from 'react-icons/ri'
import { useSearchParams, Link } from "react-router-dom";
import NoticeList from "./NoticeList";
import NoticeContent from "./NoticeContent";

const Notice = () => {
  const [searchParams] = useSearchParams();
  const no = searchParams.get("no");

  return (
    <NoticeContainer>
      <Title>Notice</Title>
      <Write>
        <A to="/write?board=notice">
          <RiPencilFill />
        </A>
      </Write>
      {no == null ? <NoticeList /> : <NoticeContent no={no} />}
    </NoticeContainer>
  );
};
export default Notice;
const A = styled(Link)`
  text-decoration : none;
  color : #121212;
`
const NoticeContainer = styled.div`
  margin: 0 auto;
  width: 70vw;
  height: 70vh;
  position: relative;
  font-family: "Noto Sans KR";
  font-size: 0.9rem;
`;
const Write = styled.div`
  cursor : pointer;
  font-family: "Lora";
  text-align: right;
`;

const Title = styled.div`
  font-family: "Lora";
  text-align: center;
  padding: 1rem 0;
`;
