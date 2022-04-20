import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import { useParams, useMatch } from "react-router";
import All from './All'
const Shop = () => {
  const match = useMatch('/shop/:category')
  console.log(match)

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