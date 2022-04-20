import { React } from 'react'
import styled from 'styled-components'
import { agreetment1, agreetment2, agreetment3 } from './agreetments'

const Register = () => {
  return (
    <RegisterContainr>
      <Title>JOIN US</Title>
      <InputContainer>
        <Label>아이디</Label>
        <Input></Input>
      </InputContainer>

      <InputContainer>
        <Label>비밀번호</Label>
        <Input></Input>
      </InputContainer>

      <InputContainer>
        <Label>비밀번호 확인</Label>
        <Input></Input>
      </InputContainer>

      <InputContainer>
        <Label>휴대전화</Label>
        <Input></Input>
      </InputContainer>

      <InputContainer>
        <Label>이메일</Label>
        <Input></Input>
      </InputContainer>

      <AgreetmentContainer>
        <P>
          <Checkbox type="checkbox" />
          이용약관, 개인정보수집 이용, 쇼핑정보 수신(선택)에 모두 동의합니다.
        </P>
        <Agreetment>
          <AgreetmentTitle>[필수] 이용약관 동의</AgreetmentTitle>
          <Box>{agreetment1}</Box>
          <P>
            이용 약관에 동의하십니까?
            <Checkbox type="checkbox" />
          </P>
        </Agreetment>

        <Agreetment>
          <AgreetmentTitle>[필수] 개인정보 수집 및 이용 동의</AgreetmentTitle>
          <Box>{agreetment2}</Box>
          <P>
            개인정보 수집 및 이용에 동의하십니까?
            <Checkbox type="checkbox" />
          </P>
        </Agreetment>

        <Agreetment>
          <AgreetmentTitle>[선택] 쇼핑정보 수신 동의</AgreetmentTitle>
          <Box>{agreetment3}</Box>
          <P>
            SMS 수신을 동의하십니까?
            <Checkbox type="checkbox" />
          </P>
          <P>
            이메일 수신을 동의하십니까?
            <Checkbox type="checkbox" />
          </P>
        </Agreetment>
      </AgreetmentContainer>
    </RegisterContainr>
  );
}

export default Register
const AgreetmentTitle = styled.h3`
  font-size : 0.8rem;
`
const Box = styled.div`
  height: 100px;
  overflow-y: scroll;
  overflow-x : wrap;
  border: 1px solid #dadada;
  white-space: pre;
`;
const Agreetment = styled.div`
`
const Checkbox = styled.input`
  margin : 0;
`

const P = styled.div`
  display : flex;
  align-items : center;
`;

const AgreetmentContainer = styled.div`

`
const Label = styled.label`

`
const Input = styled.input`
  width : 90%;
`
const InputContainer = styled.div`
  width : 100%;
  display : flex;
  justify-content : space-between;
  align-items : center;
`

const Title = styled.h1`
  padding: 1rem 0;
  text-align : center;
  font-size : 1rem;
  font-family : 'lora', serif;
  font-weight : normal;
`;
const RegisterContainr = styled.div`
  margin: 0 auto;
  width: 60vw;
  min-height: 80vh;
  position: relative;
  font-family: "noto-sans", sans-serif;
  font-size : 0.8rem;
`;