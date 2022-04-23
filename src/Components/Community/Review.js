import React from "react";
import styled from "styled-components";
import { RiPencilFill } from "react-icons/ri";
import { Link, useSearchParams } from "react-router-dom";
import ReviewList from "./ReviewList";
import ReviewContent from "./ReviewContent";

const Review = () => {
  const [searchParams] = useSearchParams();
  const no = searchParams.get("no");

  return (
    <ReviewContainer>
      <Title>Reviews</Title>
      <Write>
        <A to="/write?board=review">
          <RiPencilFill />
        </A>
      </Write>
      {no == null ? <ReviewList /> : <ReviewContent no={no} />}
    </ReviewContainer>
  );
};
export default Review;
const A = styled(Link)`
  text-decoration: none;
  color: #121212;
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

const ReviewContainer = styled.div`
  margin: 0 auto;
  width: 70vw;
  height: 70vh;
  position: relative;
  font-family: "Noto Sans KR";
  font-size: 0.9rem;
`;
