import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CreateCourse from "./components/AddCourse";
import Register from "./components/Register";
// import Header from "./layouts/Header";
import Admin from "./components/Admin";
// import { useState } from "react";
import NavigationMenuDemo from "./layouts/Headerradix";
import Login from "./components/Login";
// import Home from "./pages/Home";
import TaskPage from "./components/TaskView";

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="app " style={{ backgroundColor: "#002333" }}>
      <Router>
        {/* <Header isLoggedIn={isLoggedIn} /> */}
        <NavigationMenuDemo />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Landing />} />
          <Route path="/admin" element={<Admin />} >
            {/* <Route path="/admin/course" element={<Admin />}/> */}
            <Route path="/admin/addcourse" element={<CreateCourse />}/>
            <Route path="/admin/course" element={<TaskPage />}/>
            </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<CreateCourse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
