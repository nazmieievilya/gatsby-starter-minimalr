import React from "react";
import styled, { keyframes, css } from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import MobileMenu from "src/pages/components/MobileMenu";

const NavBar = () => {
  const [background, setBackground] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 200) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, [background]);
  console.log(background);
  const StyledLink = styled((props) => <Link {...props} />)`
    margin-right: 10px;
    color: ${background ? "black" : "white"};
    text-decoration: none;
    :hover {
      color: gray;
    }
  `;

  const update = keyframes`
  0% {background-color: transparent;}
  100% {background-color: white;}
`;
  const NavContainer = styled.div`
    color: ${background ? "black" : "white"};
    padding: 0;
    padding-right: 10px;
    z-index: 50;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;
    position: fixed;
    font-size: 2vw;
    animation: ${({ background }) =>
      background
        ? css`
            ${update} 0.7s linear forwards
          `
        : "none"};
    .buttons {
      height: 100%;
      display: flex;
      align-items: center;
      button {
        margin: 0;
        font-size: 1vw;
        text-align: center;
        min-height: 2vw;
        min-width: 4vw;
      }
    }
    @media (min-width: 2000px) {
      height: 2.5vw;
    }

    .menu {
      display: none;
      visibility: hidden;
    }
    @media (max-width: 768px) {
      justify-content: space-between;
      .buttons {
        display: none;
        visibility: hidden;
      }
      .menu {
        display: block;
        visibility: ${showMenu ? "hidden" : "visible"};
      }
    }

    @media (max-width: 600px) {
      font-size: 3vw;
    }
  `;
  return (
    <>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <NavContainer background={background}>
        <LogoCont>
          <li>
            <StyledLink textDecoration="none" to="#home">
              RE
            </StyledLink>
          </li>
        </LogoCont>
        <List>
          <li>
            <StyledLink textDecoration="none" to="#home">
              home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="#features">features</StyledLink>
          </li>
          <li>
            <StyledLink to="#contact">contact</StyledLink>
          </li>
        </List>
        <div className="buttons">
          <button className="btn btn-primary btn-sm me-2">Sign Up</button>
          <button className="btn btn-light btn-sm me-2">Log In</button>
        </div>
        <div
          onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)}
          className="menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </NavContainer>
    </>
  );
};

const LogoCont = styled.ul`
  font-size: 90%;
  padding: 5px;
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    font-size: 100%;
  }
  li {
    display: inline;
  }
`;
const List = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  li {
    display: inline;
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;
export default NavBar;
