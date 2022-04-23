import { Navigate, Route, Router, Routes } from "react-router";
import MyPageIndex from "./MyPageIndex";
import MyAccountCheck from "./MyAccountCheck";

const MyPage = () => {
  return (
    <Routes>
      <Route path="" element={<MyPageIndex />} />
      <Route path="myaccount" element={<MyAccountCheck />} />
    </Routes>
  );
};

export default MyPage;
