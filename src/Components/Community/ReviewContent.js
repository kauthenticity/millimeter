import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const ReviewContent = ({ no }) => {
  const [review, setReview] = useState({});

  // retrieve review
  useState(() => {
    axios.get("/db/reviews.json").then((res) => {
      var temp = res.data.filter((item) => item.no == no);
      setReview(temp[0]);
    });
  }, []);
  return (
    <ReviewContentContainer>
      <ul>
        <TitleItem>
          <Subject>{review.title}</Subject>
          {/* <Writer>{notice.writer}</Writer> */}
          <Date>{review.date}</Date>
        </TitleItem>
        <DescriptionItem>{review.description}</DescriptionItem>
        <ButtonItem>
          <A to="/review">
            <Button>목록</Button>
          </A>
        </ButtonItem>
      </ul>
    </ReviewContentContainer>
  );
};

export default ReviewContent;

const A = styled(Link)`
  text-decoration: none;
  color: #121212;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  border: 1px solid #565656;
  padding: 0.8rem 2.8rem;
  font-family: "Lora";
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background: #232323;
    color: white;
  }
`;

const DescriptionItem = styled.li`
  padding: 3rem 1rem;
  border-top: 1px solid #565656;
  box-sizing: border-box;
  min-height: 35vh;
  display: flex;
  align-items: center;
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
const ButtonItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 0;
  border-top: 1px solid #121212;
  box-sizing: border-box;
`;
const TitleItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid #565656;
  box-sizing: border-box;
`;

const ReviewContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 95%;
  font-size: 0.9rem;
`;
