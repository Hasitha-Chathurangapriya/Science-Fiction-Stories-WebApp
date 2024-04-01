import React, { useContext }  from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./LoginContext";

function About(){
    const navigate = useNavigate();
    const {authenticate} = useContext(AuthContext);

    const handleLogin = () => {
        authenticate();
        navigate("/about")
    };

  return (
    <div>
        <h2>Login</h2>
        <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default About;
