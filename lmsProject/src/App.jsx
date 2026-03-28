import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/AuthenticationAndAuthriztion/Login/Login";
import Autherization from "./Components/AuthenticationAndAuthriztion/Autherization/Autherization";
import { Counter } from "./features/counter/Counter.jsx";
import HomePage from "./Components/HomePageComponents/HomePage/HomePage.jsx";
import TeachWithUsBanner from "./Components/TeachOnUsPageComponents/TeachWithUsBanner/TeachWithUsBanner.jsx";
import { AddToCart } from "./features/counter/AddToCart.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Autherization />} />
          <Route path="/teachwithus" element={<TeachWithUsBanner />} />
          <Route path="addtocart" element={<AddToCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
