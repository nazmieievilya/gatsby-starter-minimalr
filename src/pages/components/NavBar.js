import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "gatsby";
const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
  top: 0;
  width: 100%;
`;
const NavBar = () => {
  const [background, setBackground] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const StyledLinkMobile = styled((props) => <Link {...props} />)`
  color: white;
  text-decoration: none;
 
  :hover {
    color: gray;
  }
`;
  const MobileMenuList = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li{
      list-style: none;
    }
  `;
  const StyleShowMenu = {
    right: showMenu ? "0%" : "-70%",
    padding: "0",
    zIndex: "300",
    position: "fixed",
    width: "70%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    fontSize: "2rem",
    color: "white",
    flexDirection: "column",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    transition: "all 0.5s ease",
  };
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
    :hover {
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
    transition: 0.2s all ease;

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
    <>
      <div style={StyleShowMenu}>
        <CloseButton
          onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </CloseButton>
        <MobileMenuList>
          <ul>
            <li>
              <StyledLinkMobile to="#home">
                home
              </StyledLinkMobile>
            </li>
            <li>
              <StyledLinkMobile to="#features">features</StyledLinkMobile>
            </li>
            <li>
              <StyledLinkMobile to="#contact">contact</StyledLinkMobile>
            </li>
          </ul>
        </MobileMenuList>
      </div>
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
