import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
const FooterContainer = styled.div`
  margin: 0;
  padding-top: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #292a2e;
  width: 100vw;
  height: 20vw;
  li {
    list-style: none;
  }
  h3 {
    font-size: 2vw;
  }
  p {
    font-size: 1.5vw;
  }

  .FooterItem {
    margin: 2vw;
    color: white;
  }
  @media (min-width: 1500px) {
    li {
      font-size: 1.2vw;
    }
  }
  @media (max-width: 478px) {
    li {
      font-size: 3.5vw;
    }
    height: 40vw;
    .FooterItem {
      h3 {
        font-size: 4vw;
      }
      p {
        font-size: 3.5vw;
      }
      margin: 2vw;
    }
  }
`;
const FooterComp = () => {
  return (
    <FooterContainer>
      <div className="FooterItem">
        <h3>Real Estate</h3>
        <p>comething else</p>
      </div>
      <div className="FooterItem">
        <h3>Links</h3>
        <li>
          <a href="https://github.com/nazmieievilya/gatsby-starter-minimalr">
            GitHub
          </a>
        </li>
        <li>
          <Link textDecoration="none" to="#home">
            home
          </Link>
        </li>
        <li>
          <Link to="#features">features</Link>
        </li>
        <li>
          <Link to="#contact">contact</Link>
        </li>
      </div>
      <div className="FooterItem">
        <h3>something </h3>
        <p>comething else</p>
      </div>
      <div className="FooterItem">
        <h3>Tags</h3>
        <p>comething else</p>
      </div>
    </FooterContainer>
  );
};

export default FooterComp;
