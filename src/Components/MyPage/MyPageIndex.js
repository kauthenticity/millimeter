import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MyPageOrderList from "./MyPageOrderList";
import MyPageMenu from "./MyPageMenu";

const MyPageIndex = () => {
  const userId = "wlstlf7345";
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([[], [], [], [], [], [], []]);

  // load user info
  useEffect(() => {
    axios.get("/db/users.json").then((res) => {
      const temp = res.data.filter((item) => item.id == userId);

      // exception(no user exists) handler
      if (temp.length == 0) {
        alert("일치하는 회원 정보가 없습니다.");
        navigate("/");
      }
      setUser(temp[0]);
    });

    // retrieve order data from db
    axios.get("/db/orders.json").then((res) => {
      // find user orderes
      const userOrders = res.data.filter((item) => item.userId == userId);

      // push each order in order status array
      userOrders.forEach((userOrder) => {
        let ordersCopy = [...orders];
        ordersCopy[userOrder.status].push(userOrder);
        setOrders(ordersCopy);
      });
    });
  }, []);

  return (
    <MyPageContainer>
      <Title>
        <H3>My Page</H3>
        {/* <p>
          {user.name}님의 회원 등급은 [{user.level}]입니다.
        </p> */}
      </Title>
      <MyPageOrderList orders={orders} />
      <MyPageMenu userId={userId} />
    </MyPageContainer>
  );
};

export default MyPageIndex;

const H3 = styled.h3`
  font-size: 0.9rem;
  font-weight: normal;
`;

const Title = styled.div`
  font-family: "Lora";
  text-align: center;
  padding: 1rem 0;
`;

const MyPageContainer = styled.div`
  margin: 0 auto;
  width: 70vw;
  min-height: 70vh;
  position: relative;
  font-family: "Noto Sans KR";
`;
