import { React, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Mileage = () => {
  const userid = "wlstlf7345";
  const [mileage, setMileage] = useState({});

  useEffect(() => {
    axios.get("/db/mileages.json").then((res) => {
      const temp = res.data.filter((item) => item.userid === userid);
      setMileage(temp[0]);
    });
  }, []);

  return (
    <MileageContainer>
      <Title>USED MILEAGE</Title>
      <Container>
       
      </Container>
    </MileageContainer>
  );
};

export default Mileage;

const A = styled(Link)`
  text-decoration: none;
  color: #121212;
  &:hover {
  }
`;

const Money = styled.span``;

const Name = styled.strong`
  font-family: "Noto Sans KR";
  font-weight: 500;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #121212;
`;

const Ul = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;

const Container = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 6rem;
`;

const Title = styled.div`
  font-family: "Lora";
  text-align: center;
  padding: 1rem 0;
`;

const MileageContainer = styled.div`
  margin: 0 auto;
  width: 70vw;
  min-height: 70vh;
  position: relative;
`;
