import React from "react";
import { useNavigate } from "react-router-dom"; 
import PropTypes from "prop-types";
interface LoginProps {
  onLogin: () => void; // Define onLogin prop as a function that returns void
}

function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          username: username,  // Sending username in header
          password: password   // Sending password in header
        }
      });

      if (response.ok) {
        const data = await response.json();
        // You can handle the successful login here, like storing the token in state or localStorage.
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token);
        onLogin();
        navigate("/admin");
      } else {
        // Handle login error here
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <div className="text-white flex h-screen justify-center items-center">
      <div>
      <h1>Login to admin dashboard</h1>
      <br />
      Username - <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <br />
      Password -{" "}
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      New here? <a href="/register">Register</a>
      </div>
    </div>
  );
}
Login.propTypes = {
  onLogin: PropTypes.func.isRequired, // Define onLogin as a required function prop
};

export default Login;
