import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'


const Order = () => {
  const userid = 'wlstlf7345'
  const [dateRange, setDateRange] = useState(3)
  const [dbOrders, setDbOrders] = useState([])
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(0)
  useEffect(() => {
    axios.get('/db/orders.json').then((res) => {
      const temp = res.data.filter((item) => item.id === userid);
      setDbOrders(temp)
      setOrders(temp)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const onChangeStatus = (e) => {
    setStatus(e.target.value)
  }

  const onClickRange = (e) => {
    setDateRange(e.target.value)
  }

  // 주문 상태가 바뀔대마다 orders 새로 세팅
  useEffect(() => {
    setOrders(dbOrders.filter((item)=>item.status === status))
  }, [status, dbOrders])



  return (
    <OrderContainer>
      <Title>ORDER LIST</Title>
      <Content>
        <Select onChange={onChangeStatus}>
          <Option value="0">전체</Option>
          <Option value="1">입금 전</Option>
          <Option value="2">배송 준비 중</Option>
          <Option value="3">배송 완료</Option>
          <Option value="4">취소</Option>
          <Option value="5">교환</Option>
          <Option value="6">반품</Option>
        </Select>
        <Date>
          <DateList>
            <Ul>
              <Li className={dateRange === 0 ? "selected" : null} value="0" onClick={onClickRange}>
                today
              </Li>
              <Li className={dateRange === 1 ? "selected" : null} value="1" onClick={onClickRange} >
                1week
              </Li>
              <Li className={dateRange === 2 ? "selected" : null} value="2" onClick={onClickRange}>
                1month
              </Li>
              <Li className={dateRange === 3 ? "selected" : null} value="3" onClick={onClickRange} >
                3month
              </Li>
              <Li className={dateRange === 4 ? "selected" : null} value="4" onClick={onClickRange} >
                6month
              </Li>
            </Ul>
          </DateList>
          <DatePickerContent></DatePickerContent>
        </Date>
      </Content>
    </OrderContainer>
  );
}

export default Order
const Li = styled.li`
  margin-right: 0.5rem;
  &.selected {
    color: #121212;
    border-bottom: 1px solid #121212;
  }
  &:hover{
    color : #121212;
  }
  transition : color 0.15s ease-in;

`;
const Ul = styled.ul`
  list-style: none;
  display : flex;
  padding-inline-start : 0px;
  font-size : 0.9rem;
  color : #7a7a7a;
  cursor : pointer;
`;
const DatePickerContent = styled.div``
const DateList = styled.div``
const Date = styled.div`
  display : flex;
  justify-content : space-between;
`

const Content = styled.div`
  max-width: 800px;
  margin: 1rem auto;
  font-family: "Noto Sans Kr";
`;

const Option = styled.option`
  padding: 0.8rem 0;
`;
const Select = styled.select`
  width: 100%;
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid #121212;
  padding: 0.8rem;
  font-family : inherit;
  font-size : 0.9rem;
`;

const Title = styled.div`
  font-family: "Lora";
  text-align: center;
  padding: 1rem 0;
`

const OrderContainer = styled.div`
  margin: 0 auto;
  width: 70vw;
  min-height: 70vh;
  position: relative;
 
`
