import React from "react";
import LoginContainer from "./login";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  let navigate = useNavigate();
  const handleOnclick = () => {
    console.log("click");
    navigate('/menu', {});
  };

  return (
    <div>
      <LoginContainer handleOnclick={handleOnclick} />
    </div>
  );
};

export default Login;
