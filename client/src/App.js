import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from './components/Home';
import About from "./components/About";
import Signup from './components/Signup';
import Contact from "./components/Contact";

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar />
   <Routes>
   <Route exact path="/" element={<div>
                <Home />
            </div>} />
            <Route path="/login" element={<div>
                <Login />
            </div>} />
            <Route path="/about" element={<div>
                <About />
            </div>} />
            <Route path="/signup" element={<div>
                <Signup />
            </div>} />
            <Route path="/contact" element={<div>
                <Contact />
            </div>} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
