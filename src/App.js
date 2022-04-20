

import './App.css';
import Header from './Components/Defaults/Header'
import Footer from './Components/Defaults/Footer'
import Index from './Components/Defaults/Index'
import About from './Components/About/About'
import Shop from './Components/Shop/Shop'
import Login from './Components/Auth/Login'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop/*" element={<Shop />}>
          <Route Path=":cateogry" element={<Shop />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
