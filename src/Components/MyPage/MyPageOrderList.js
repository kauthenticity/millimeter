import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyPageOrderList = ({ orders }) => {
  return (
    <OrderInfo>
      <H3>나의 주문처리 현황(최근 3개월 기준)</H3>
      <Ul className="orders">
        <Li className="order">
          <A to="/mypage/order?status=0">
            <Strong>입금 전</Strong>
          </A>
          <A to="/mypage/order?status=0">
            <Span>({orders[0].length})</Span>
          </A>
        </Li>
        <Li className="order">
          <A to="/mypage/order?status=1">
            <Strong>배송 준비 중</Strong>
          </A>
          <A to="/mypage/order?status=1">
            <Span>({orders[1].length})</Span>
          </A>
        </Li>
        <Li className="order">
          <A to="/mypage/order?status=2">
            <Strong>배송 중</Strong>
          </A>
          <A to="/mypage/order?status=2">
            <Span>({orders[2].length})</Span>
          </A>
        </Li>
        <Li className="order">
          <A to="/mypage/order?status=3">
            <Strong>배송 완료</Strong>
          </A>
          <A to="/mypage/order?status=3">
            <Span>({orders[3].length})</Span>
          </A>
        </Li>
      </Ul>
      <Ul className="cs">
        <Li className="cs">
          <A className="cs" to="/mypage/order?status=4">
            <Strong>취소</Strong>
          </A>
          <A className="cs" to="/mypage/order?status=4">
            <Span>({orders[4].length})</Span>
          </A>
        </Li>
        <Li className="cs">
          <A className="cs" to="/mypage/order?status=5">
            <Strong>교환</Strong>
          </A>
          <A className="cs" to="/mypage/order?status=5">
            <Span>({orders[5].length})</Span>
          </A>
        </Li>
        <Li className="cs">
          <A className="cs" to="/mypage/order?status=6">
            <Strong>환불</Strong>
          </A>
          <A className="cs" to="/mypage/order?status=6">
            <Span>({orders[6].length})</Span>
          </A>
        </Li>
      </Ul>
    </OrderInfo>
  );
};

export default MyPageOrderList;

const Span = styled.span`
  letter-spacing: 4px;
  font-weight: 500;
`;

const Strong = styled.strong`
  font-weight: 500;
`;

const A = styled(Link)`
  text-decoration: none;
  color: #121212;
`;

const Li = styled.li`
  padding: 1.2rem 0.6rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #565656;
`;

const Ul = styled.ul`
  list-style: none;
  width: 70%;
  margin: auto;
`;

const OrderInfo = styled.div`
  font-family: "Noto Sans KR";
`;

const H3 = styled.h3`
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
`;
