import React from 'react'
import styled from "styled-components"
// import { StaticImage } from 'gatsby-plugin-image'

const FeaturesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: white;
    width: 100%;
    height: 700px;


`
const Features = () => {
  return (
    <FeaturesContainer>
      <div  >
      <h2 className='m-4' >Buying a home shouldn't be a mystery</h2>
      </div>
        <div className='d-flex f-direction-column justify-content-center align-items-center ' >
          <div style={{width: "40%", marginRight: "1rem"}} >
            <p style={{ fontWeight: "bold" }} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo
            </p>
          </div>
          {/* <StaticImage 
          style={{width: "400px"}}
          src='../../images/features.webp'
          alt='jopa'
          /> */}
        </div>
    </FeaturesContainer>
  )
}

export default Features