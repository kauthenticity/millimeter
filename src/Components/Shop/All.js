import {React, useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Pagination from './Pagination'

const All = () => {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  useEffect(() => {
    /* public 폴더에서 가져옴 */
    axios.get('/items/items.json').then((res) => {
      setItems(res.data)
    })
  });

  return (
    <AllContainer>
      <Title>ALL</Title>
      <ItemContainer>
        {items.slice(offset, offset + limit).map(({ id, src, name, price }) => (
          <Item key={id}>
            <Img src={src} alt="product"></Img>
            <Name>{name}</Name>
            <Price>{new Intl.NumberFormat().format(price)}</Price>
          </Item>
        ))}
      </ItemContainer>

      <Pagination
        total={items.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </AllContainer>
  );
}


export default All
const Img = styled.img`
  width: 18vw;
  height: 24vw;
  object-fit: cover;
`;
const Title = styled.div`
`
const Price = styled.div`
  margin-top: 0.4rem;
  font-size: 0.7rem;
`;

const Name = styled.div`
  margin-top : 0.4rem;
  font-size : 0.8rem;
`
const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 33.333333%;
`;
const Item = styled.div`
  padding : 3rem;
`;
const AllContainer = styled.div`
  width : 100%;
  padding : 1rem 6rem;
  font-size : 0.9rem;
`