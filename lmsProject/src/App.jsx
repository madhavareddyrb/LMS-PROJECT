import "./App.css";
import Navbar from "./Components/HomePageComponents/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/AuthenticationAndAuthriztion/Login/Login";
import Autherization from "./Components/AuthenticationAndAuthriztion/Autherization/Autherization";
import { Counter } from "./features/counter/Counter.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/counter" element={<Counter />} />

          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Autherization />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
