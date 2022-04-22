import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { RiShoppingBagFill } from "react-icons/ri";

import "./Header.css";
import Logo from "../../Assets/Image/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <img src={Logo} className="logo" alt="logo" />
        </Link>
      </LogoContainer>

      <MenuWrapper>
        <A to="/about">
          <MenuContainer>About</MenuContainer>
        </A>
        <A to="/shop">
          <MenuContainer>Shop</MenuContainer>
        </A>
        <Dropdown className="dropdown">
          <A to="#">
            <MenuContainer>Community</MenuContainer>
          </A>
          <DropDownContent className="dropdownContent">
            <A to="/notice">
              <DropDownItem>Notice</DropDownItem>
            </A>
            <A to="/qna">
              <DropDownItem>Q&amp;A</DropDownItem>
            </A>
            <A to="/review">
              <DropDownItem>Review</DropDownItem>
            </A>
          </DropDownContent>
        </Dropdown>
      </MenuWrapper>

      <AuthWrapper>
        <Dropdown className="dropdown">
          <A to="/login">
            <AuthContainer>Login</AuthContainer>
          </A>
          <DropDownContent className="dropdownContent">
            <A to="/register">
              <DropDownItem>Register</DropDownItem>
            </A>
          </DropDownContent>
        </Dropdown>

        <Dropdown className="dropdown">
          <A to="/mypage">
            <AuthContainer>My Page</AuthContainer>
          </A>
          <DropDownContent className="dropdownContent">
            <A to="/login">
              <DropDownItem>Login</DropDownItem>
            </A>

            <A to="/order">
              <DropDownItem>Order</DropDownItem>
            </A>
          </DropDownContent>
        </Dropdown>

        <AuthIconContainer>
          <RiShoppingBagFill className="menu-icon" />
        </AuthIconContainer>
        <SearchContainer className="search">
          <Search className="search-text"></Search>
          <MdSearch className="menu-icon search-icon" />
        </SearchContainer>
      </AuthWrapper>
    </HeaderContainer>
  );
};

export default Header;
const DropDownItem = styled.div`
  padding: 0.3rem 0;
  background-color : rgba(255,255,255,0.3);
`;
const DropDownContent = styled.div`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s linear, opacity 0.3s linear;
  position: absolute;
  z-index: 1;
  font-size: 14px;
  margin-top: 0.5rem;
  width : calc(100% - 3vw);
`;
const Dropdown = styled.div`
  position: relative;
`;

const A = styled(Link)`
  text-decoration: none;
  color: #121212;
`;
const AuthIconContainer = styled.div`
  margin-right: 2vw;
`;

const SearchContainer = styled.div`
  position: relative;
  transition: all 1s;
  margin-right: 4vw;
`;
const Search = styled.input`
  display: none;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-bottom: 1px solid #111111;
  position: absolute;
`;

const AuthContainer = styled.div`
  margin-right: 3vw;
`;

const AuthWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const MenuWrapper = styled.div`
  margin-left: 6vw;
  display: flex;
  align-items: center;
`;

const MenuContainer = styled.div`
  margin-right: 3vw;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 10vh;
  max-width: 100%;
  font-size: 16px;
  color: #121212;
`;
const LogoContainer = styled.div`
  margin-left: 2vw;
`;
