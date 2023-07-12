import { useState } from "react";
import { Routes, Route } from "react-router-dom";

/** import pages */
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Contact from "./pages/Contact";

/** import components */
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

/** import style */
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
