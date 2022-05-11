import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ButtonLogout } from "../../shared/Components/ButtonLogout/ButtonLogout";
import { JwtContext } from "../../shared/Context/JwtContext";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import "./navbar.scss";

function Navbar() {
  const { jwt } = useContext(JwtContext);
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <>
      <Nav>
        <div className="navbar-general">
          <div className="brand">
            <div className="logo-container">
              <NavLink to="/">
                <img
                  href="/"
                  className="img-logo"
                  src="./assets/unknown.png"
                  alt="logo"
                ></img>
              </NavLink>
            </div>
          </div>

          <div className="button-container">
            <ul className="list-1">
              <NavLink to="/about">
                <li>Nosotros</li>
              </NavLink>
              <NavLink to="/faq">
                <li>FAQ</li>
              </NavLink>
              {jwt && (
                <NavLink to="/fares">
                  <li>Tarifas</li>
                </NavLink>
              )}
              {jwt && (
                <NavLink to="/locations">
                  <li>Coworkings</li>
                </NavLink>
              )}
              {!jwt && (
                <>
                  <NavLink to="/login">
                    <li>Iniciar Sesión</li>
                  </NavLink>

                  <NavLink to="/register">
                    <button className="button-19">Registrarse</button>
                  </NavLink>
                </>
              )}
              {jwt && <ButtonLogout />}
            </ul>
          </div>

          <CustomMenu onClick={() => setBurgerStatus(true)} />

          <BurgerNav show={burgerStatus}>
            <CloseWrapper>
              <CustomClose onClick={() => setBurgerStatus(false)} />
            </CloseWrapper>
            <NavLink to="/about" onClick={() => setBurgerStatus(false)}>
              <li>Nosotros</li>
            </NavLink>
            <NavLink to="/faq" onClick={() => setBurgerStatus(false)}>
              <li>FAQ</li>
            </NavLink>
            {jwt && (
              <>
                <NavLink to="/fares" onClick={() => setBurgerStatus(false)}>
                  <li>Tarifas</li>
                </NavLink>
                <NavLink to="/locations" onClick={() => setBurgerStatus(false)}>
                  <li>Coworkings</li>
                </NavLink>
              </>
            )}
            {!jwt && (
              <>
                <NavLink to="/login" onClick={() => setBurgerStatus(false)}>
                  <li>Iniciar Sesión</li>
                </NavLink>
                <NavLink to="/register" onClick={() => setBurgerStatus(false)}>
                  <li>Registrarse</li>
                </NavLink>
              </>
            )}
            {jwt && <ButtonLogout />}
          </BurgerNav>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;

const Nav = styled.div`
  .navbar-general {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    align-items: center;

    .brand {
      .logo-container {
        img {
          width: 90px;
          height: 60px;
        }
      }
    }

    .button-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      

      .list-1 {
        display: flex;
        list-style: none;
        gap: 2rem;
        align-items: center;

        a {
          color: black;
          text-decoration: none;
        }
      }

      .list-2 {
        display: flex;
        list-style: none;

        a {
          color: black;
          text-decoration: none;
        }
      }
    }

    .button-19 {
      appearance: button;
      display: flex;
      text-align: center;
      background-color: #F68B3C;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      box-sizing: border-box;
      color: #ffffff;
      cursor: pointer;
      display: inline-block;
      font-family: din-round, sans-serif;
      letter-spacing: 0.8px;
      margin: 20px;
      outline: none;
      overflow: visible;
      padding: 10px;
      text-align: center;
      text-transform: uppercase;
      touch-action: manipulation;
      transform: translateZ(0);
      transition: filter 0.2s;
      user-select: none;
      -webkit-user-select: none;
      vertical-align: middle;
      white-space: nowrap;
      width: 130px;
    }

    .button-19:after {
      background-clip: padding-box;
      background-color: #f4a973;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      bottom: -4px;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }

    .button-19:main,
    .button-19:focus {
      user-select: auto;
    }

    .button-19:hover:not(:disabled) {
      filter: brightness(1.1);
    }

    .button-19:disabled {
      cursor: auto;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .navbar-general {
    }

    .button-container {
      display: none;

      ul,
      li,
      button,
      .button-19 {
        display: none;
      }
    }
  }
`;
const CustomMenu = styled(GiHamburgerMenu)`
  font-size: 40px;
  size: 30px;
  cursor: pointer;
  padding-right: 20px;

  @media screen and (min-width: 1080px) {
    display: none;
  }
`;

const BurgerNav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color: white;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;

  li {
    margin-bottom: 10px;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const CustomClose = styled(VscChromeClose)`
  font-size: 20px;
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;