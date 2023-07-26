import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

/** import pages */
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";

/** import components */
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

/** import style */
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    navigate("/forum");
  };

  return (
    <div className="App">
      <Navbar user={user} />
      <main style={{ width: "90%", margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {
            // si user existe alors on affiche le forum
            user && <Route path="/forum" element={<Forum />} />
          }
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
