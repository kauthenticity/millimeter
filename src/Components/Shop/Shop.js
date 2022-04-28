import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import {useMatch } from "react-router";
import All from './All'
const Shop = () => {
  const match = useMatch('/shop/:category')
  return (
    <ShopContainer>
      <SideBar />
      <All />
    </ShopContainer>
  )
}

export default Shop;

const ShopContainer = styled.div`
  display : flex;
`