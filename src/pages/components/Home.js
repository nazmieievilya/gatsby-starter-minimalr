import React from 'react'
import styled from "styled-components"
import { StaticImage } from 'gatsby-plugin-image'

const HomeContainer = styled.div`
  position: relative;
    width: 100%;
    height: 700px;
    z-index: -5;
    

`
const TextContainer = styled.div`
  padding: 40px;
  background-color: rgb(0,0,0, 0.7);
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  



`
const LandingText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: 10px;
  margin-top: 40px;
  font-weight: 5;
  color: white;
  font-size: 2vw;
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css");
  @media (max-width: 768px) {
    font-size: 3vw;
  }

`
  

const Home = () => {
  return (
    <HomeContainer>
      <TextContainer>
        <LandingText>
          <h2>
            Real Estate Company
          </h2>
          <i class="bi bi-wifi-2"></i>
        </LandingText>
        <LandingText>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo
          </p>
        </LandingText>
      </TextContainer>
      <span >
        <StaticImage 
            style={{position: "fixed", width: "100%", height: "100%"}}
            src='../../images/home.png'
            alt='jopa'
          />
      </span>
      
    </HomeContainer>
  )
}

export default Home