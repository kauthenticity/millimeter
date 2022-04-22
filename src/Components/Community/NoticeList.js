import { React, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../Defaults/Pagination";

const NoticeList = () => {
  // for pagination
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);

  // search filter
  const [filter, setFilter] = useState("title");
  // search keyword
  const [keyword, setKeyword] = useState('')

  // notices from db
  const [dbNotices, setdbNotices] = useState([]);
  // notices from search result
  const [searchNotice, setSearchNotice] = useState([])
  // notices to show
  const [notices, setNotices] = useState([])

  // set search filter
  const onChangeFilter = (e) => {
    setFilter(e.target.value)
  }
  
  // set search keyword
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value)
  }

  // when search button is clicked
  const onClickSearch = (e) => {
    if (keyword === '') {
      setNotices(dbNotices)
      return
    }

    let res = []
    if (filter === 'title') {
      res = notices.filter((notice)=>notice.title.includes(keyword))
    }
    else if (filter === 'content') {
      res = notices.filter((notice)=>notice.description.includes(keyword))
    }
    else if(filter === 'both'){
       res = notices.filter((notice) => notice.description.includes(keyword) || notice.title.includes(keyword));
    }

    setNotices(res)
  }

  // triget click event on button when press enter in input
  const onKeyPressEnter = (e) => {
    if (e.key === 'Enter') {
      onClickSearch()
    }
  }

  // retrieve notice data
  useState(() => {
    axios.get("/db/notices.json").then((res) => {
      const tempNotices = res.data.sort((a, b) => {
        return b.id - a.id
      })
      setdbNotices(tempNotices)
      setNotices(tempNotices);
    });
  }, []);

  const noticeExist = notices.map((notice) => (
    <ItemWrapper key={notice.no}>
      <A to={"/notice?no=" + notice.no}>
        <Subject>{notice.title}</Subject>
      </A>
      <Writer>{notice.writer}</Writer>
      <Date>{notice.date}</Date>
    </ItemWrapper>
  ));

  const noticeNotExist = <ItemWrapper>검색 결과가 없습니다</ItemWrapper>

  return (
    <NoticeListContainer>
      <ItemContainer>
        {/* {notices.map((notice) => (
          <ItemWrapper key={notice.no}>
            <A to={"/notice?no=" + notice.no}>
              <Subject>{notice.title}</Subject>
            </A>
            <Writer>{notice.writer}</Writer>
            <Date>{notice.date}</Date>
          </ItemWrapper>
        ))} */}
        {notices.length == 0 ? noticeNotExist : noticeExist}
      </ItemContainer>
      <Pagination
        total={notices.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
      <SearchContainer>
        <Filter onChange={ onChangeFilter}>
          <option value="title">제목</option>
          <option value="content">내용</option>
          <option value="both">제목, 내용</option>
        </Filter>
        <Input onChange={onChangeKeyword} onKeyPress={ onKeyPressEnter }value={ keyword}/>
        <Button onClick={ onClickSearch}>search</Button>
      </SearchContainer>
    </NoticeListContainer>
  );
};

const Input = styled.input`
  padding: 0.4rem 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #121212;
  width : 65%;
  letter-spacing : 1px;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  border: 1px solid #121212;
  padding: 0.4rem 1rem;
  font-family: "Lora";
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background: #232323;
    color: white;
  }
`;

const SearchContainer = styled.div`
  width : 50%;
  margin : 0 auto;
  margin-bottom : 2rem;
  display : flex;
  justify-content : space-between;
`;

const Filter = styled.select`
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid #121212;
  padding: 0.4rem 0;
  width : 15%;
  text-align : center;
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
  border-bottom: 1px solid #565656;
  box-sizing: border-box;
`;

const ItemContainer = styled.ul`
  > * {
    &:first-child {
      border-top: 1px solid #565656;
    }
  }
  margin-bottom: auto;
`;

const NoticeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 95%;
  font-size : 0.9rem;
`;

export default NoticeList;
