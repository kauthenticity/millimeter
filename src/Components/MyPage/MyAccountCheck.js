import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MyAccountEdit from "./MyAccountEdit";

const MyAccountCheck = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const userId = "wlstlf7345";
  const userPw = "0000";

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onClickCheck = () => {
    if (input === userPw) {
      navigate("/mypage/myaccount/edit");
    } else {
      alert("비밀번호를 확인해 주세요");
    }
  };

  return (
    <MyAccountCheckContainer>
      <Title>Password Check</Title>
      <CheckContainer>
        <P>
          {userId}님의 회원정보를 안전하게 보호하기 위해
          <br />
          비밀번호를 한번 더 확인해 주세요.
        </P>
        <Input type="password" onChange={onChangeInput} value={input} />
        <Button onClick={onClickCheck}>Check</Button>
      </CheckContainer>
    </MyAccountCheckContainer>
  );
};

export default MyAccountCheck;

const Button = styled.button`
  font-family: "Lora", serif;
  display: block;
  margin: auto;
  width: 80%;
  border: none;
  background: transparent;
  margin-top: 2rem;
  border: 1px solid #121212;
  padding: 0.6rem 0;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background: #232323;
    color: white;
  }
`;

const Input = styled.input`
  font-family: "Lora", serif;
  display: block;
  margin: auto;
  width: 80%;
  padding: 10px 0;
  font-size: 16px;
  color: #121212;
  border: none;
  border-bottom: 1px solid #121212;
  outline: none;
  background: transparent;
  letter-spacing: 2px;
`;

const P = styled.p`
  text-align: center;
`;

const CheckContainer = styled.div`
  font-family: "Noto Sans KR";
  width: 60%;
  margin: 4rem auto;
`;

const Title = styled.div`
  font-family: "Lora";
  text-align: center;
  padding: 1rem 0;
`;

const MyAccountCheckContainer = styled.div`
  margin: 0 auto;
  width: 70vw;
  min-height: 70vh;
  position: relative;
`;
