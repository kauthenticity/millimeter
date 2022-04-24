import { React } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyPageMenu = ({ userId }) => {
  return (
    <MyPageMenus>
      <UlMenu>
        <A to="/mypage/order">
          <LiMenu>ORDER</LiMenu>
        </A>

        <A to="/mypage/myaccount/check">
          <LiMenu>MY ACCOUNT</LiMenu>
        </A>

        <A to="/mypage/mileage">
          <LiMenu>MILEAGE</LiMenu>
        </A>

        <A to="/mypage/coupons">
          <LiMenu>COUPONS</LiMenu>
        </A>

        <A to="/mypage/wishlist">
          <LiMenu>WISH LIST</LiMenu>
        </A>

        <A to="/mypage/mywritings">
          <LiMenu>MY WRITINGS</LiMenu>
        </A>
      </UlMenu>
    </MyPageMenus>
  );
};

export default MyPageMenu;

const A = styled(Link)`
  font-family: "Lora";
  text-decoration: none;
  color: #121212;
  transition: all 0.2s ease-in;
  &:hover {
    background: #232323;
    color: white;
  }
  flex-basis: 40%;
  margin-bottom: 1rem;
`;

const LiMenu = styled.li`
  padding: 0.8rem 1.2rem;
  border: 1px solid #121212;
  font-size: 0.8rem;
  text-align: center;
`;

const UlMenu = styled.ul`
  display: flex;
  list-style: none;
  width: 60%;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const MyPageMenus = styled.div`
  margin: 2rem 0;
`;
