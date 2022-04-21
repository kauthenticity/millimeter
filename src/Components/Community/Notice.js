import React, { useState } from "react";
import styled from "styled-components";

import { useSearchParams } from "react-router-dom";
import NoticeList from "./NoticeList";
import NoticeContent from "./NoticeContent";

const Notice = () => {
  const [searchParams] = useSearchParams();
  const no = searchParams.get("no");

  return (
    <NoticeContainer>
      <Title>Notice</Title>
      {no == null ? <NoticeList /> : <NoticeContent />}
    </NoticeContainer>
  );
};
export default Notice;

const NoticeContainer = styled.div`
  margin: 0 auto;
  width: 70vw;
  height: 70vh;
  position: relative;
  font-family: "Noto Sans KR";
  font-size: 0.9rem;
`;

const Title = styled.div`
  font-family: "Lora";
  text-align: center;
  padding: 1rem 0;
`;
