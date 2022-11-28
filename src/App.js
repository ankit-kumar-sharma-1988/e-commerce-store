import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import CartDetail from './components/cartdetails/CartDetail';
import CartAddItem from './components/cartAddItem/CartAddItem';
// import Contact from './components/dashboard/Contact';



function App() {
  return (
    <div className="App">
      {/* <Contact/> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart/:id" element={<CartDetail />} />
        <Route path="/cart_product" element={<CartAddItem />}/>



      </Routes>

    </div>
  );
}

export default App;
