import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../Context/JwtContext";
import styled from "styled-components";


export const ButtonLogout = () => {
  let navigate = useNavigate();
  const { setJwt } = useContext(JwtContext);
  const logOut = () => {
    localStorage.removeItem("token");
    setJwt(null);
    navigate("/login");
  };
  return <Button><button className="button-24" onClick={logOut}>Log Out</button></Button>;
};
const Button = styled.div`

.button-24 {
  background: #FF4742;
  border: 1px solid #FF4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: nunito,roboto,proxima-nova,"proxima nova",sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
}

.button-24:hover,
.button-24:active {
  background-color: initial;
  background-position: 0 0;
  color: #FF4742;
}

.button-24:active {
  opacity: .5;
}
`