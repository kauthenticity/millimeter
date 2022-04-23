import React from "react";
import styled from "styled-components";
import { RiPencilFill } from "react-icons/ri";
import { Link, useSearchParams } from "react-router-dom";
import QnAList from "./QnAList";
import QnAContent from "./QnAContent";

const QnA = () => {
  const [searchParams] = useSearchParams();
  const no = searchParams.get("no");
  const type = searchParams.get("type");

  return (
    <QnAContainer>
      <Title>Q&amp;A</Title>
      <Write>
        <A to="/write?board=qna">
          <RiPencilFill />
        </A>
      </Write>
      {no == null ? <QnAList /> : <QnAContent no={no} type={type} />}
    </QnAContainer>
  );
};
export default QnA;

const A = styled(Link)`
  text-decoration: none;
  color: #121212;
  width: 70%;
`;
const Write = styled.div`
  cursor: pointer;
  font-family: "Lora";
  text-align: right;
`;

const Title = styled.div`
  font-family: "Lora";
  text-align: center;
  padding: 1rem 0;
`;

const QnAContainer = styled.div`
  margin: 0 auto;
  width: 70vw;
  height: 70vh;
  position: relative;
  font-family: "Noto Sans KR";
  font-size: 0.9rem;
`;
