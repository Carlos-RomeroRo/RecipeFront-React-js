import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from "./pages/Login"; 
import Home from "./pages/Home";
import './index.css'
function App() {
  return (
    <>
      <NavBar />
      <div className="pt-28">
         <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
          </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
