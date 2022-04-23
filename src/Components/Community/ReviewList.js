import { React, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../Defaults/Pagination";

const ReviewList = () => {
  // for pagination
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);

  // search filter
  const [filter, setFilter] = useState("title");
  // search keyword
  const [keyword, setKeyword] = useState("");

  // reviews from db
  const [dbReviews, setdbReviews] = useState([]);

  // reviews to show
  const [reviews, setReviews] = useState([]);

  // set search filter
  const onChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  // set search keyword
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  // when search button is clicked
  const onClickSearch = (e) => {
    if (keyword === "") {
      setReviews(dbReviews);
      return;
    }

    let res = [];
    if (filter === "title") {
      res = reviews.filter((review) => review.title.includes(keyword));
    } else if (filter === "content") {
      res = reviews.filter((review) => review.description.includes(keyword));
    } else if (filter === "both") {
      res = reviews.filter(
        (review) =>
          review.description.includes(keyword) || review.title.includes(keyword)
      );
    } else if (filter === "writer") {
      res = reviews.filter((review) => review.writer.includes(keyword));
    }

    setReviews(res);
  };

  // triget click event on button when press enter in input
  const onKeyPressEnter = (e) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  // retrieve review data
  useState(() => {
    axios
      .get("/db/reviews.json")
      .then((res) => {
        const tempReviews = res.data.sort((a, b) => {
          return b.id - a.id;
        });

        tempReviews.forEach((r) => {
          r.writer2 = r.writer.slice(0, 2) + "**";
        });
        setdbReviews(tempReviews);
        setReviews(tempReviews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const reviewExist = reviews.map((review) => (
    <ItemWrapper key={review.no}>
      <Img src={review.item.src}></Img>
      <A to={"/review?no=" + review.no}>
        <Subject>{review.title}</Subject>
      </A>
      <Writer>{review.writer2}</Writer>
      <Date>{review.date}</Date>
    </ItemWrapper>
  ));

  const reviewNotExist = <ItemWrapper>검색 결과가 없습니다</ItemWrapper>;

  return (
    <ReviewListContainer>
      <ItemContainer>
        {reviews.length == 0 ? reviewNotExist : reviewExist}
      </ItemContainer>
      <Pagination
        total={reviews.length}
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
    </ReviewListContainer>
  );
};

const Img = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
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
  font-family: "Lora";

  padding-left: 2rem;
`;

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
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

const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 95%;
  font-size: 0.9rem;
`;

export default ReviewList;
