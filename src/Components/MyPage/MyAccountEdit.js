import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal";
import axios from "axios";
import "../Auth/modal.css";

const MyAccountEdit = () => {
  const userId = "wlstlf7345";
  // 회원가입 폼 정보
  const [info, setInfo] = useState({
    name: "",
    id: "",
    password: "",
    password2: "",
    phone1: "",
    phone2: "",
    phone3: "",
    postcode: "",
    address1: "",
    address2: "",
  });
  // 비밀번호가 일치하는지
  const [pwSame, setPwSame] = useState(false);

  const [postCode, setPostCode] = useState("");
  const [addr, setAddr] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});

  const iconStyle = {
    color: "#1F99D2",
    fontSize: "0.4rem",
    position: "absolute",
    marginLeft: "0.2rem",
  };

  // 회원가입 폼 state 바인딩
  const onInfoChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressComplete = (data) => {
    setPostCode(data.zonecode);
    setAddr(data.address);
    setInfo({ ...info, postcode: data.zonecode, address1: data.address });
    setIsOpen(false);
  };

  function onOpenZipcode() {
    setIsOpen(true);
  }

  function onCloseZipcode() {
    setIsOpen(false);
  }

  useEffect(() => {
    axios.get("/db/users.json").then((res) => {
      const temp = res.data.filter((item) => item.id === userId);
      setUser(temp[0]);
    });
  }, []);

  // 비밀번호, 비밀번호 확인이 바뀔 대마다 서로가 같은지 체크함.
  useEffect(() => {
    setPwSame(info.password === info.password2);
  }, [info.password, info.password2]);

  return (
    <MyAccountEditContainr>
      <Title>My ACCOUNT</Title>
      <InputContainer>
        <Label>NAME</Label>
        <FaStarOfLife style={iconStyle} />
        <Input
          type="text"
          name="name"
          id="name"
          value={user.name}
          disabled
        ></Input>
      </InputContainer>

      <InputContainer>
        <Label>ID</Label>
        <FaStarOfLife style={iconStyle} />
        <Input type="text" name="id" id="id" disabled value={user.id}></Input>
      </InputContainer>

      <InputContainer>
        <Label>CURRENT PASSWORD</Label>
        <FaStarOfLife style={iconStyle} />
        <Input
          type="password"
          name="password"
          id="password"
          onChange={onInfoChange}
          required
        ></Input>
      </InputContainer>

      <InputContainer>
        <Label>NEW PASSWORD</Label>
        <FaStarOfLife style={iconStyle} />
        <Input
          type="password"
          name="password"
          id="password"
          onChange={onInfoChange}
          required
        ></Input>
      </InputContainer>

      <InputContainer>
        <Label>NEW PASSWORD CHECK</Label>
        <FaStarOfLife style={iconStyle} />
        <Input
          type="password"
          name="password2"
          id="password2"
          onChange={onInfoChange}
          required
        ></Input>
        <Helper>{pwSame === true ? "" : "비밀번호가 일치하지 않습니다"}</Helper>
      </InputContainer>

      <InputContainer>
        <Label>PHONE NUMBER</Label>
        <FaStarOfLife style={iconStyle} />
        <PhoneContainer>
          <Select
            onChange={onInfoChange}
            name="phone1"
            defaultValue={user.phone1}
          >
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
            <option value="019">019</option>
          </Select>
          <span style={{ margin: "0 1rem" }}>-</span>
          <Phone
            name="phone2"
            defaultValue={user.phone2}
            onChange={onInfoChange}
          />
          <span style={{ margin: "0 1rem" }}>-</span>
          <Phone
            name="phone3"
            onChange={onInfoChange}
            defaultValue={user.phone3}
          />
        </PhoneContainer>
      </InputContainer>

      <InputContainer>
        <Label required>E-MAIL</Label>
        <FaStarOfLife style={iconStyle} />
        <Input
          type="email"
          name="email"
          id="email"
          onChange={onInfoChange}
          defaultValue={user.email}
        ></Input>
      </InputContainer>

      <InputContainer>
        <Label>ADDRESS</Label>
        <PhoneContainer>
          <Input
            name="postcode"
            defaultValue={user.postcode}
            onChange={onInfoChange}
          ></Input>
          <ButtonAddress onClick={onOpenZipcode}>주소 찾기</ButtonAddress>
          {isOpen && (
            <Modal
              ariaHideApp={false}
              isOpen={true}
              onRequestClose={onCloseZipcode}
              className="modal address"
              overlayClassName="overlay address"
            >
              <MdClose
                onClick={onCloseZipcode}
                style={{
                  float: "right",
                  marginBottom: "1rem",
                  cursor: "pointer",
                }}
              />
              <DaumPostcode
                style={{ height: "500px" }}
                onComplete={handleAddressComplete}
              />
            </Modal>
          )}
        </PhoneContainer>
        <Input
          name="address1"
          onChange={onInfoChange}
          placeholder="기본 주소"
          defaultValue={user.address1}
        />
        <Input
          name="address2"
          onChange={onInfoChange}
          placeholder="상세 주소"
          defaultValue={user.address2}
        />
      </InputContainer>
      <Button>EDIT</Button>
    </MyAccountEditContainr>
  );
};

export default MyAccountEdit;

const Phone = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #121212;
  border: none;
  border-bottom: 1px solid #121212;
  outline: none;
  background: transparent;
  font-size: 0.9rem;
  position: relative;
`;
const Select = styled.select`
  width: 100%;
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid #121212;
`;
const Helper = styled.span`
  font-size: 0.7rem;
  font-family: "Noto Sans KR";
  letter-spacing: 1px;
`;
const Button = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  margin: 2rem 0 4rem 0;

  border: 1px solid #121212;
  padding: 0.6rem 0;
  font-family: "Lora";

  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background: #232323;
    color: white;
  }
`;

const ButtonAddress = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  border: 1px solid #121212;
  padding: 0.6rem 0;
  margin-left: 2rem;
  cursor: pointer;
  font-family: "Noto Sans KR";
  transition: all 0.2s ease-in;
  outline: none;
  &:hover {
    background: #232323;
    color: white;
  }
`;

const Label = styled.label`
  font-size: 0.7rem;
  font-weight: bold;
`;
const Input = styled.input`
  font-family: "Noto Sans KR";
  width: 100%;
  padding: 10px 5px;
  font-size: 16px;
  color: #121212;
  border: none;
  border-bottom: 1px solid #121212;
  outline: none;
  background: transparent;
  font-size: 0.9rem;
  position: relative;
  box-sizing: border-box;
  letter-spacing: 1px;
`;

const PhoneContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const InputContainer = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  padding: 1rem 0;
  text-align: center;
  font-size: 1rem;
  /* font-family : 'Lora', serif; */
  font-weight: normal;
`;
const MyAccountEditContainr = styled.div`
  margin: 0 auto;
  width: 35vw;
  min-height: 80vh;
  position: relative;
  /* font-family: "Lora", serif; */
  font-size: 0.8rem;
`;
