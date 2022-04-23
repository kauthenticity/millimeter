import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RiPencilFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../Defaults/Pagination";
import Re from "../../Assets/Image/ico_re.gif";

const QnA = () => {
  // questions to show
  const [qs, setQs] = useState([]);

  // questions from db
  const [dbQs, setDbQs] = useState([]);

  // for pagination
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);

  // search filter
  const [filter, setFilter] = useState("title");
  // search keyword
  const [keyword, setKeyword] = useState("");

  // set search filter
  const onChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  // set search keyword
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const onClickSearch = (e) => {
    if (keyword === "") {
      setQs(dbQs);
      return;
    }

    let res = [];
    if (filter === "title") {
      res = qs.filter((q) => q.title.includes(keyword));
    } else if (filter === "content") {
      res = qs.filter((q) => q.description.includes(keyword));
    } else if (filter === "both") {
      res = qs.filter(
        (q) => q.description.includes(keyword) || q.title.includes(keyword)
      );
    } else if (filter === "writer") {
      res = qs.filter((q) => q.writer.includes(keyword));
    }

    setQs(res);
  };

  // triget click event on button when press enter in input
  const onKeyPressEnter = (e) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  // retrieve questions and answers from db
  useEffect(() => {
    axios
      .get("/db/qs.json")
      .then((res) => {
        res.data.forEach((item) => {
          item.writer2 = item.writer.slice(0, 2) + "***";
        });

        setDbQs(res.data);
        setQs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const QuestionExist = qs.map((q) => {
    return q.answer == null ? (
      <ItemWrapper key={q.id}>
        <A to={"/qna?no=" + q.id + "&type=q"}>
          <Subject>{q.title}</Subject>
        </A>
        <Writer>{q.writer2}</Writer>
        <Date>{q.date}</Date>
      </ItemWrapper>
    ) : (
      <div key={q.id}>
        <ItemWrapper>
          <A to={"/qna?no=" + q.id + "&type=q"}>
            <Subject>{q.title}</Subject>
          </A>
          <Writer>{q.writer2}</Writer>
          <Date>{q.date}</Date>
        </ItemWrapper>
        <ItemWrapper>
          <Subject>
            <img src={Re} style={{ padding: "0 0.5rem 0 1rem" }} />
            <A to={"/qna?no=" + q.answer.id + "&type=a"}>{q.answer.title}</A>
          </Subject>
          <Writer>{q.answer.writer}</Writer>
          <Date>{q.answer.date}</Date>
        </ItemWrapper>
      </div>
    );
  });

  const QuestionNotExist = <ItemWrapper>검색 결과가 없습니다.</ItemWrapper>;

  return (
    <QnAListContainer>
      <ItemContainer>
        {qs.length !== 0 ? QuestionExist : QuestionNotExist}
      </ItemContainer>
      <Pagination
        total={qs.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
      <SearchContainer>
        <Filter onChange={onChangeFilter}>
          <option value="title">제목</option>
          <option value="content">내용</option>
          <option value="both">제목, 내용</option>
          <option value="writer">작성자</option>
        </Filter>
        <Input
          onChange={onChangeKeyword}
          onKeyPress={onKeyPressEnter}
          value={keyword}
        />
        <Button onClick={onClickSearch}>search</Button>
      </SearchContainer>
    </QnAListContainer>
  );
};
export default QnA;
const ItemContainer = styled.ul`
  > * {
    &:first-child {
      border-top: 1px solid #565656;
    }
  }
  margin-bottom: auto;
`;

const Input = styled.input`
  padding: 0.4rem 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #121212;
  width: 65%;
  letter-spacing: 1px;
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
  width: 50%;
  margin: 0 auto;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.select`
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid #121212;
  padding: 0.4rem 0;
  width: 15%;
  text-align: center;
`;

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #565656;
  box-sizing: border-box;
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
  display: flex;
  align-items: center;
  width: 70%;
`;

const A = styled(Link)`
  text-decoration: none;
  color: #121212;
  width: 70%;
`;
const Write = styled.div`
  cursor: pointer;
  font-family: "Lora";
  text-align: right;
`;

const Title = styled.div`
  font-family: "Lora";
  text-align: center;
  padding: 1rem 0;
`;

const QnAListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 95%;
  font-size: 0.9rem;
`;
