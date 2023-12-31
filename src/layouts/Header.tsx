// import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import axios from "axios";

interface HeaderProps {
  isLoggedIn: boolean;
}


function Header({ }: HeaderProps) {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUser(res.data.username);
       setIsLoggedIn(true);
        console.log("hello");
      });
    
  }, );
  const navigate = useNavigate();
  return (
    <AppBar className=" mb-200 " style={{ background:isLoggedIn ? 'black': 'transparent', boxShadow: 'none', position: isLoggedIn ? 'relative': 'fixed', width: '100%', zIndex: 999 }}>
      <div className="h-20">
      <nav className=" flex justify-between items-center ">
        <div className="flex w-16 ">
          {/* <img
            src="https://images.neventum.com/logos/2018/70/5aa69b3310d27-dx-y.png"
            alt="logo"
            className=""
          /> */}
          <p className=" my-4 ml-4 font-bold">Devlearn</p>
        </div>
        <div className=" font-bold mr-0 ">
          <ul className="flex flex-row space-x-4  font-bold">
            <li className=""> Home </li>
            <li> About us</li>
            <li>
              <Link to="/courses">Courses </Link>
            </li>
            <li>Contact</li>
          </ul>
        </div>

        {user ? (
          <div>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate('/'); 
                setIsLoggedIn(false);
                window.location.reload(); 
              }}
            >
              Logout
            </button>
           
          </div>
        ) : (
          <div className="px-2">
            {" "}
            <ul className="flex ml-auto ">
              <li className="px-2">
                <Button variant="contained" className="w-24">
                  {" "}
                  <a href="/login">Login</a>{" "}
                </Button>
              </li>
              <li>
                <Button variant="contained" className="w-24">
                  {" "}
                  <a href="/register">Register</a>{" "}
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
      </div>
    </AppBar>
  );
}

export default Header;
