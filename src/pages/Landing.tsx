import Admin from "../components/Admin";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";
import baseURL from '../config.js';

function Landing() {
    const [user, setUser] = useState("");
    useEffect(() => {
        axios
          .get(`${baseURL}me`, {
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
    <div>
        {user ? (<><Admin/> </>
        )
        : (<div><Home/> </div>)}
    
    </div>
  );
}

export default Landing;
