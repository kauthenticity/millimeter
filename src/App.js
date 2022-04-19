

import './App.css';
import Header from './Components/Defaults/Header'
import Footer from './Components/Defaults/Footer'
import Index from './Components/Defaults/Index'
import SideBar from './Components/Defaults/SideBar'
import About from './Components/About/About'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
