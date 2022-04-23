import "./App.css";
import "./Components/Editor/Editor.css";
import Header from "./Components/Defaults/Header";
import Footer from "./Components/Defaults/Footer";
import Index from "./Components/Defaults/Index";
import About from "./Components/About/About";
import Shop from "./Components/Shop/Shop";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Notice from "./Components/Community/Notice";
import Write from "./Components/Editor/Editor";
import QnA from "./Components/Community/QnA";
import Review from "./Components/Community/Review";
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
        <Route path="/register" element={<Register />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/write" element={<Write />} />
        <Route path="/qna" element={<QnA />} />
        <Route path="/review" element={<Review />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
