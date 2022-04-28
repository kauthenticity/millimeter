import { React, forwardRef, useEffect} from 'react'
import DatePicker, { registerLocale } from "react-datepicker"
import ko from 'date-fns/locale/ko'
import styled from 'styled-components'
import { FaRegCalendarAlt } from "react-icons/fa";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import "react-datepicker/dist/react-datepicker.css";
// custom css
import "./DatePicker.css";

//set language
registerLocale("ko", ko); 

const today = new window.Date();
var before = new window.Date();
before = new window.Date(before.setMonth(today.getMonth() - 3)); 

// icon styles
const navIconStyle = {
  verticalAlign: "middle",
  cursor: "pointer"
}
const calendarIconStyle = {
  marginLeft: "0.5rem",
  color: "#ff7e7a",
};

// header style
const headerStyle = {
  padding : "0 10 10 10",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontWeight: 500,
  fontSize: "0.9rem",
  fontFamily: "Noto Sans KR",
};


const MyDatePicker = ({ startDate, setStartDate, endDate, setEndDate, dateRange }) => {
  // set header month
  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

  // custom header
  const header = ({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
    <div style={headerStyle}>
      <NavButton onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        <GrFormPrevious style={navIconStyle} />
      </NavButton>
      <span>
        {date.getFullYear()}년 {months[date.getMonth()]}
      </span>
      <NavButton onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        <GrFormNext style={navIconStyle} />
      </NavButton>
    </div>
  );

  //custom input
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div>
      <DateButton onClick={onClick} ref={ref}>
        {value}
        <FaRegCalendarAlt style={calendarIconStyle} />
      </DateButton>
    </div>
  ));

  // set start date according to dateRange(0:1day, 1:1week, 2:1mont, 3:3month, 4:6month) 
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
        before = new window.Date(today.getFullYear(), today.getMonth()-1, today.getDate());
        break;
      }
      case 3: {
        before = new window.Date(today.getFullYear(), today.getMonth()-3, today.getDate());
        break;
      }
      case 4: {
        before = new window.Date(today.getFullYear(), today.getMonth()-6, today.getDate());
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
      <DatePicker
        renderCustomHeader={header}
        showPopperArrow={false}
        fixedHeight
        locale={ko}
        dateFormat="yyyy-MM-dd"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomInput />}
      />

      <Span>~</Span>

      <DatePicker
        renderCustomHeader={header}
        showPopperArrow={false}
        fixedHeight
        locale={ko}
        dateFormat="yyyy-MM-dd"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        customInput={<CustomInput />}
      />

      <Button>search</Button>
    </>
  );
}

export default MyDatePicker


//style
const NavButton = styled.button`
  background : none;
  border : none;
`

const Button = styled.button`
  font-family: "Lora", serif;
  border: none;
  background: transparent;
  margin-top: 2rem;
  border: 1px solid #121212;
  margin-left : 1rem;
  padding: 0.3rem 0.6rem;
  font-size : 0.7rem;
  cursor: pointer;
  display : block;
  margin : auto 0;
  margin-left : 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    background: #232323;
    color: white;
  }
`;

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