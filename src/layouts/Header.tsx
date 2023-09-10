// import "./header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import axios from "axios";

function Header() {
  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUser(res.data.username);
        console.log("hello");
      });
  }, []);
  return (
   <AppBar> 
    <nav className=" flex flex-row" >
      <div className="header w-16 ">
        <img
          src="https://images-platform.99static.com//6P4kTTYuYEu_XAoU0zZcZZZbElU=/652x656:1393x1397/fit-in/500x500/99designs-contests-attachments/112/112176/attachment_112176840"
          alt="logo"
          className=" "
        />
        </div>
<div>
        <ul className="flex flex-row">
          <li className="decoration-green-900 text-3xl"> Home </li>
          <li> About us</li>
          <li>
            <Link to="/courses">Courses </Link>
          </li>
          <li>Contact</li>
          {user ? (
            <div>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location = "/";
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              {" "}
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </div>
          )}
        </ul>
      </div>
    </nav>
    </AppBar>
  );
}

export default Header;
