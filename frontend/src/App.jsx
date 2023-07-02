import { Routes, Route } from "react-router-dom";

import Login from "@pages/Login";
import Register from "@pages/Register";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ width: "90%", margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
