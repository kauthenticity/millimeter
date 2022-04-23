import { React, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const labelStyle = {
    top: "-20px",
    left: "0",
    fontSize: "0.6rem",
  };

  const onChangeId = (e) => {
    setId(e.target.value);
    console.log(id);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  return (
    <LoginContainer>
      <Title> LOGIN </Title>
      <InputContainer>
        <Input name="id" id="id" onChange={onChangeId}></Input>
        <Label for="id" style={id !== "" ? labelStyle : {}}>
          id
        </Label>
      </InputContainer>

      <InputContainer>
        <Input type="password" name="pw" id="pw" onChange={onChangePw}></Input>
        <Label for="pw" style={pw !== "" ? labelStyle : {}}>
          password
        </Label>
      </InputContainer>

      <RememberContainer>
        <Checkbox type="checkbox" />
        <Remember>Remember me</Remember>
      </RememberContainer>

      <Button>LOGIN</Button>
      <Button className="isBottom">
        <A to="/regiester">JOIN US</A>
      </Button>

      <EtcContainer>
        <EtcItem>
          <A to="#">Forgot Id</A>
        </EtcItem>
        <EtcItem>
          <A to="#">Forgot Password</A>
        </EtcItem>
        {/* <EtcItem>
          <A to="/register">Register</A>
        </EtcItem> */}
      </EtcContainer>
    </LoginContainer>
  );
};

export default Login;

const A = styled(Link)`
  text-decoration: none;
  color: #121212;
`;

const EtcItem = styled.div`
  font-size: 0.7rem;
  display: inline-block;
  padding-bottom: 2px;
  &:after {
    display: block;
    content: "";
    padding-bottom: 2px;
    border-bottom: solid 1px #121212;
    transform: scaleX(0);
    transition: transform 0.25s linear;
  }
  &:hover {
    &:after {
      padding-bottom: 2px;
      transform: scaleX(1);

      /* transform-origin: 0% 50%; */
    }
  }
`;
const EtcContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  font-family: "Lora", serif;
  width: 100%;
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

    ${A} {
      color: white;
    }
  }
  &.isBottom {
    margin: 1rem 0 2rem 0;
  }
`;
const RememberContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;
const Remember = styled.div`
  display: inline-block;
  font-size: 0.7rem;
  vertical-align: middle;
`;

const Checkbox = styled.input`
  margin: 0;
  display: inline-block;
  margin-right: 0.5rem;
`;

const InputContainer = styled.div`
  position: relative;
  margin-top: 1.5rem;
`;
const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 0.8rem;
  color: #565655;
  pointer-events: none;
  transition: 0.25s;
`;
const Input = styled.input`
  font-family: "Lora", serif;
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #121212;
  border: none;
  border-bottom: 1px solid #121212;
  outline: none;
  background: transparent;
  &:focus ~ label {
    top: -20px;
    left: 0;
    font-size: 0.6rem;
  }
`;
const Title = styled.div`
  text-align: center;
  padding: 1rem 0;
`;
const LoginContainer = styled.div`
  margin: 0 auto;
  width: 25vw;
  height: 60vh;
  position: relative;
`;
