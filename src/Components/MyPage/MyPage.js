import { Navigate, Route, Router, Routes } from "react-router";
import MyPageIndex from "./MyPageIndex";
import MyAccountCheck from "./MyAccountCheck";
import MyAccountEdit from "./MyAccountEdit";

const MyPage = () => {
  return (
    <Routes>
      <Route path="" element={<MyPageIndex />} />
      <Route path="/myaccount/check" element={<MyAccountCheck />} />
      <Route path="/myaccount/edit" element={<MyAccountEdit />} />
    </Routes>
  );
};

export default MyPage;
