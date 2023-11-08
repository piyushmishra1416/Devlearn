import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Landing from "./components/Landing";
import CreateCourse from "./components/CreateCourse";
import Register from "./components/Register";
import Header from "./layouts/Header";
import Admin from "./components/Admin";
import { useState } from "react";

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="app " style={{ backgroundColor: "#002333" }}>
      <Router>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Landing />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/login"
            element={<Login onLogin={() => setIsLoggedIn(true)} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<CreateCourse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
