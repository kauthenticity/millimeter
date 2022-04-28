import { React, useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import DatePicker from '../Defaults/DatePicker'

const today = new window.Date();
var before = new window.Date();
before = new window.Date(before.setMonth(today.getMonth() - 3)); 

const statusObject = {
  1: "입금 전",
  2: "배송 준비 중",
  3: "배송 완료",
  4: "취소",
  5: "교환",
  6 : "반품"
}

const Order = () => {
  const userid = "wlstlf7345";

  const [dateRange, setDateRange] = useState(3);
  const [dbOrders, setDbOrders] = useState([]);
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(0);
  const [startDate, setStartDate] = useState(before);
  const [endDate, setEndDate] = useState(today);

  useEffect(() => {
    axios
      .get("/db/orders.json")
      .then((res) => {
        var temp = res.data.filter((item) => item.userid === userid);

        setDbOrders(temp);
        setOrders(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const onClickRange = (e) => {
    setDateRange(e.target.value);
  };

  // 주문 상태가 바뀔대마다 orders 새로 세팅
  useEffect(() => {
    if (status === 0) {
      setOrders(dbOrders);
      return;
    }
    setOrders(dbOrders.filter((item) => item.status === status));
  }, [status]);

  useEffect(() => {
    setOrders(dbOrders.filter((item) => new window.Date(item.date) > startDate && new window.Date(item.date) < endDate));
  }, [startDate, endDate]);

  const tbody = orders.map((order) => {
    return (
      <>
        <Tr>
          <Td rowSpan={order.items.length} className="number">
            {order.number}
          </Td>
          <Td className="info">
            <div style={{ display: "flex" }}>
              <ItemImg src={order.items[0].src} />
              <InfoWrapper>
                <Name>{order.items[0].name}</Name>
                <SizeColor>
                  {order.items[0].color || order.items[0].size ? "option :" : ""}
                  {order.items[0].color} {order.items[0].size}
                </SizeColor>
              </InfoWrapper>
            </div>
          </Td>
          <Td className="quantity">{order.items[0].quantity}</Td>
          <Td className="price">{order.items[0].price}</Td>
          <Td className="status" rowSpan={order.items.length}>
            {statusObject[order.status]}
          </Td>
        </Tr>
        {order.items.slice(1).map((item) => (
          <Tr>
            <Td className="info">
              <div style={{ display: "flex" }}>
                <ItemImg src={item.src} />
                <InfoWrapper>
                  <Name>{item.name}</Name>
                  <SizeColor>
                    {item.color || item.size ? "option :" : ""}
                    {item.color} {item.size}
                  </SizeColor>
                </InfoWrapper>
              </div>
            </Td>
            <Td className="quantity">{item.quantity}</Td>
            <Td className="price">{item.price}</Td>
          </Tr>
        ))}
      </>
    );
  });

  /*
        
*/
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
              <Li className={dateRange === 1 ? "selected" : null} value="1" onClick={onClickRange}>
                1week
              </Li>
              <Li className={dateRange === 2 ? "selected" : null} value="2" onClick={onClickRange}>
                1month
              </Li>
              <Li className={dateRange === 3 ? "selected" : null} value="3" onClick={onClickRange}>
                3month
              </Li>
              <Li className={dateRange === 4 ? "selected" : null} value="4" onClick={onClickRange}>
                6month
              </Li>
            </Ul>
          </DateList>
          <DatePickerContent>
            <DatePicker startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} dateRange={dateRange} />
          </DatePickerContent>
        </Date>
        <ShowOrdersWrapper>
          <Table>
            <Thead>
              <Tr>
                <Th className="number">주문번호</Th>
                <Th className="info">상품 정보</Th>
                <Th className="quantity">수량</Th>
                <Th className="price">상품 금액</Th>
                <Th classname="status">진행 상황</Th>
              </Tr>
            </Thead>
            <Tbody>{tbody}</Tbody>
          </Table>
        </ShowOrdersWrapper>
      </Content>
    </OrderContainer>
  );
}

export default Order

const Name = styled.div`
  font-family : 'Lora';

`
const SizeColor = styled.div`
  color : #7a7a7a;
`

const InfoWrapper = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  padding: 0.4rem 0;
  margin-left: 1rem;
  font-size: 0.8rem;
`;

const Tbody = styled.tbody``

const Td = styled.td`
  &.number, &.status, &.price {
    font-size: 0.8rem;
  }
  &.number,
  &.quantity,
  &.price,
  &.status {
    font-family: "Lora";
    text-align: center;
  }

`;

const Th = styled.th`
  font-weight: 500;
  padding : 0.5rem;
  &.number {
    width: 20%;
  }
  &.info {
    width: 45%;
  }
  &.quantity {
    width: 10%;
  }
  &.price {
    width: 10%;
  }
  &.status {
    width: 15%;
  }
`;

const Tr = styled.tr`
  border-bottom : 1px solid #dadada;
`

const Thead = styled.thead``

const Table = styled.table`
  width : 100%;
  border-collapse : collapse;
`

const ShowOrdersWrapper = styled.div`
  border-top : 1px solid #121212;
`

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Lora";
  padding: 0.8rem 0;
  font-size: 0.8rem;
  font-weight: 600;
`;
const ItemImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  padding : 0.4rem;
  display : block;
  margin : auto 0;
`;

const OrderDetail = styled.div`
display : flex;
`
const H3 = styled.h3`
  font-family: "Lora";
  font-size: 1rem;
  font-weight: 500;
  margin-block-end: 0;


`;

const OrderItem = styled.div`
  border-bottom : 1px solid #b9b9b9;
`

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
const DatePickerContent = styled.div`
  width : 100%;
  text-align : right;
  display : flex;
  justify-content : flex-end;
  align-items : center;
`
const DateList = styled.div``
const Date = styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
`

const Content = styled.div`
  max-width: 900px;
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
  padding: 0.8rem 0.2rem;
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
  width: 80vw;
  min-height: 70vh;
  position: relative;
 
`
