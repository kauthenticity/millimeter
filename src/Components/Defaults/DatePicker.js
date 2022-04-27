import { React, forwardRef, useEffect} from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'
import './DatePicker.css'
import { FaRegCalendarAlt } from "react-icons/fa";

const today = new window.Date();
var before = new window.Date();
before = new window.Date(before.setMonth(today.getMonth() - 3)); 

const MyDatePicker = ({ startDate, setStartDate, endDate, setEndDate, dateRange}) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div>
      <DateButton onClick={onClick} ref={ref}>
        {value}
        <FaRegCalendarAlt style={{ marginLeft: "0.5rem", color: "#ff7e7a" }} />
      </DateButton>
    </div>
  ));

  useEffect(() => {
    before = today;
    switch (dateRange) {
      case 0: {
        before = today;
        break;
      }
      case 1: {
        before = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        break;
      }
      case 2: {
        before = new window.Date(before.setMonth(today.getMonth() - 1));
        break;
      }
      case 3: {
        before = new window.Date(before.setMonth(today.getMonth() - 3));
        break;
      }
      case 4: {
        before = new window.Date(before.setMonth(today.getMonth() - 6));
        break;
      }
      default: {
        before = today;
      }
    }
    setStartDate(before);
  }, [dateRange, setStartDate])


  return (
    <>
      <div style={{ display: "inline-block" }}>
        <DatePicker dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date) => setStartDate(date)} customInput={<CustomInput />} />
      </div>
      <Span>~</Span>
      <div style={{ display: "inline-block" }}>
        <DatePicker dateFormat="yyyy-MM-dd" selected={endDate} onChange={(date) => setEndDate(date)} customInput={<CustomInput />} />
      </div>
    </>
  );
}

export default MyDatePicker

const Span = styled.span`
  margin : 0 0.5rem;
`

const DateButton = styled.button`
  font-family : 'Noto Sans KR';
  background : none;
  border : none;
  outline : none;
  border-bottom : 1px solid #121212;
  padding : 0.25rem 0.5rem;
  display : flex;
  align-items : center;
  cursor : text;
`