import { React , useState} from "react";
import styled from "styled-components";
import { Link, Outlet } from 'react-router-dom'
import './SideBar.css'

const SideBar = () => {
  const [outer, setOuter] = useState(false)
  const [top, setTop] = useState(false)
  const [bottom, setBottom] = useState(false)

  // toggle menu
  const onClickOuter = () => {
    setOuter(!outer)
  }
  const onClickTop = () => {
    setTop(!top)
  }
  const onClickBottom = () => {
    setBottom(!bottom)
  }

  return (
    <SideBarContainer>
      <MenuWrapper>
        <A to="/shop/all">
          <MenuItem>ALL</MenuItem>
        </A>
        <MenuItem onClick={onClickOuter}>
          OUTER
          <SubMenuWrapper className={outer === true ? "active" : ""}>
            <A to="shop/outer?category=coat">
              <SubMenuItem>Coat</SubMenuItem>
            </A>

            <SubMenuItem>Jacket</SubMenuItem>
            <SubMenuItem>Cardigan</SubMenuItem>
          </SubMenuWrapper>
        </MenuItem>
        <MenuItem onClick={onClickTop}>
          TOP
          <SubMenuWrapper className={top === true ? "active" : ""}>
            <SubMenuItem>T-Shirt</SubMenuItem>
            <SubMenuItem>Shirt</SubMenuItem>
            <SubMenuItem>Knit</SubMenuItem>
          </SubMenuWrapper>
        </MenuItem>
        <MenuItem onClick={onClickBottom}>
          BOTTOM
          <SubMenuWrapper className={bottom === true ? "active" : ""}>
            <SubMenuItem>Denim</SubMenuItem>
            <SubMenuItem>Pants</SubMenuItem>
            <SubMenuItem>Skirt</SubMenuItem>
          </SubMenuWrapper>
        </MenuItem>
        <MenuItem>DRESS</MenuItem>
        <MenuItem>ACCESSORIES</MenuItem>
        <Outlet />
      </MenuWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
const SubMenuWrapper = styled.ul`
  list-style-type: none;
  padding-inline-start: 1rem;
  line-height: 1.5rem;
  font-size: 0.8rem;
  max-height: 0px;
  transition: max-height 0.5s ease-out;
  overflow: hidden;
`;
const A = styled(Link)`
  text-decoration : none;
  color : #121212;
`;
const SubMenuItem = styled.li`
  transition: visibility 0.3s linear, height 0.3s linear;
  cursor: pointer;
`;
const MenuItem = styled.li`
  margin-bottom : 0.25rem;
  cursor: pointer;
`;
const MenuWrapper = styled.ul`
  position: fixed;
  list-style-type: none;
  /* padding-inline-start : 5rem; */
  padding-top: 3rem;
  line-height: 1.5rem;
  font-size: 0.9rem;
`;

const SideBarContainer = styled.div`
  width : 15vw;
  min-width: 200px;
  height: 80vh;
`;
