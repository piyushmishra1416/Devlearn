import Admin from "./Admin";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";

/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
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
    <div>
        {user ? (<><Admin/> </>
        )
        : (<div><Home/> </div>)}
    
    </div>
  );
}

export default Landing;
