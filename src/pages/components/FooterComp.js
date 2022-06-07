import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #292a2e;
  width: 100vw;
  height: 20vw;
  h3{
      font-size: 2vw;
    }
    p{
      font-size: 1.5vw;
    }
  
  .FooterItem {
    margin: 2vw;
    background-color: white;
  }
  @media (max-width: 478px) {
    height: 40vw;
    .FooterItem {
    h3{
      font-size: 4vw;
    }
    p{
      font-size: 3.5vw;
    }
    margin: 2vw;
    background-color: white;
  }
  }
`;
const FooterComp = () => {
  return (
    <FooterContainer>
      <div className="FooterItem">
        <h3>something </h3>
        <p>comething else</p>
      </div>
      <div className="FooterItem">
        <h3>Links</h3>
        <p><a href="https://github.com/nazmieievilya/gatsby-starter-minimalr" >GitHub</a></p>
      </div>
      <div className="FooterItem">
        <h3>something </h3>
        <p>comething else</p>
      </div>
      <div className="FooterItem">
        <h3>something </h3>
        <p>comething else</p>
      </div>
    </FooterContainer>
  );
};

export default FooterComp;
