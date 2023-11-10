import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import './pages/index.scss'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      </Router>
    </>
  );
};

export default App;
