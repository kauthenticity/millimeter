import { React, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../Defaults/Pagination";

const NoticeList = () => {
  // for pagination
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const [filter, setFilter] = useState("");

  // notices
  const [notices, setNotices] = useState([]);

  // retrieve notice data
  useState(() => {
    axios.get("/db/notices.json").then((res) => {
      setNotices(res.data);
    });
  }, []);

  return (
    <NoticeListContainer>
      <ItemContainer>
        {notices.map((notice) => (
          <ItemWrapper key={notice.index}>
            <A to={"/notice?no=" + notice.index}>
              <Subject>{notice.title}</Subject>
            </A>
            <Writer>{notice.writer}</Writer>
            <Date>{notice.date}</Date>
          </ItemWrapper>
        ))}
      </ItemContainer>
      <Pagination
        total={notices.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
      <SearchContainer>
        <Filter>
          <option value="제목">제목</option>
          <option value="내용">내용</option>
          <option value="둘다">제목, 내용</option>
        </Filter>
        <Input />
        <Button>Search</Button>
      </SearchContainer>
    </NoticeListContainer>
  );
};

const Input = styled.input`
  padding: 0.4rem 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #121212;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  margin: 2rem 0 4rem 0;

  border: 1px solid #121212;
  padding: 0.4rem 0;
  font-family: "Lora";

  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background: #232323;
    color: white;
  }
`;

const SearchContainer = styled.div`
  margin: 0 auto;
`;

const Filter = styled.select`
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid #121212;
  padding: 0.4rem 0;
`;

const A = styled(Link)`
  text-decoration: none;
  color: #121212;
  width: 70%;
`;
const Date = styled.div`
  width: 15%;
  text-align: right;
`;
const Writer = styled.div`
  width: 15%;
  text-align: right;
`;
const Subject = styled.div`
  width: 70%;
`;

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #121212;
  box-sizing: border-box;
`;

const ItemContainer = styled.ul`
  > * {
    &:first-child {
      border-top: 1px solid #121212;
    }
  }
  margin-bottom: auto;
`;

const NoticeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 90%;
`;

export default NoticeList;
