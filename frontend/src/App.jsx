import { Routes, Route } from "react-router-dom";

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
  return (
    <div className="App">
      <Navbar />
      <main style={{ width: "90%", margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/page404" element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
