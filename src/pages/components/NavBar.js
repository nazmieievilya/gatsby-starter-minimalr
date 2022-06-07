import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "gatsby";

const NavBar = () => {
  const [background, setBackground] = useState(false);
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
  }, []);
  console.log(background);
  const StyledLink = styled((props) => <Link {...props} />)`
    color: ${background ? "black" : "white"};
    text-decoration: none;
    :hover{
      color: gray;
    }
  `;
  const NavContainer = styled.div`
    color: ${background ? "black" : "white"};
    background-color: ${background ? "white" : "transparant"};
    padding-right: 10px;
    padding-left: 10px;
    z-index: 50;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;
    position: fixed;
    font-size: 2vw;

    .menu {
      display: none;
      visibility: hidden;
    }
    @media (max-width: 768px) {
      .buttons {
        display: none;
        visibility: hidden;
      }
      .menu {
        display: block;
        visibility: visible;
      }
    }

    @media (max-width: 600px) {
      font-size: 3vw;
    }
  `;
  return (
    <NavContainer>
      <h5>something</h5>
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
      <div className="menu">
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
  );
};

const List = styled.ul`
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
