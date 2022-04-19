import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import {MdSearch} from 'react-icons/md'
import { RiShoppingBagFill } from 'react-icons/ri'

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
        <A to="/community">
          <MenuContainer>Community</MenuContainer>
        </A>
      </MenuWrapper>

      <AuthWrapper>
        <AuthContainer>Bookmark</AuthContainer>
        <AuthContainer>Delivery</AuthContainer>
        <AuthContainer>Order list</AuthContainer>
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
}


export default Header
const A = styled(Link)`
  text-decoration: none;
  color: #121212;
`;
const AuthIconContainer = styled.div`
  margin-right : 2vw;
`

const SearchContainer = styled.div`
  position : relative;
  transition : all 1s;
  margin-right : 4vw;
`
const Search = styled.input`
  display : none;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-bottom: 1px solid #111111;
  position : absolute;
`;

const AuthContainer = styled.div`
  margin-right: 3vw;
`;

const AuthWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const MenuWrapper = styled.div`
  margin-left : 6vw;
  display: flex;
  align-items : center;
`

const MenuContainer = styled.div`
  margin-right : 3vw;
`

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
  margin-left : 2vw;
`