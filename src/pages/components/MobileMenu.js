import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
const MobileMenu = ({ showMenu, setShowMenu }) => {
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
    li {
      list-style: none;
    }
  `;
  const CloseButton = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 5px;
    top: 0;
    width: 100%;
  `;
  return (
    <div style={StyleShowMenu}>
      <CloseButton onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)}>
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
            <StyledLinkMobile to="#home">home</StyledLinkMobile>
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
  );
};

export default MobileMenu;
