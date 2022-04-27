import { Route, Routes } from "react-router-dom";
import MyPageIndex from "./MyPageIndex";
import MyAccountCheck from "./MyAccountCheck";
import MyAccountEdit from "./MyAccountEdit";
import Mileage from './Mileage'
import Order from './Order'

const MyPage = () => {
  return (
    <Routes>
      <Route path="" element={<MyPageIndex />} />
      <Route path="order" element={<Order/> }/>
      <Route path="/myaccount/check" element={<MyAccountCheck />} />
      <Route path="/myaccount/edit" element={<MyAccountEdit />} />
      <Route path="mileage/*" element={<Mileage />} />
    
        
    </Routes>
  );
};

export default MyPage;
