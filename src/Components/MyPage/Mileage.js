import { Route, Routes } from 'react-router-dom'
import MileageIndex from './MileageIndex'
import MileageUsed from './MileageUsed'

const Mileage = () => {
  return (
    <Routes>
      <Route path="" element={<MileageIndex />} />
      <Route path="used" element={<MileageUsed />} />
    </Routes>
  )
}

export default Mileage;