import React from 'react'
import styled from "styled-components"
import { StaticImage } from 'gatsby-plugin-image'

const FeaturesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: white;
    padding: 10px;
    width: 100%;
    #texts{
      width: 40%;
    }
    #mobilet {
          display: none;
          visibility: hidden;
        }

    #imagecont {
      
      @media (max-width: 768px) {
        width: 90%;
        padding-top: 5vw;

      }
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
        padding: 0;
        #texts{
          width: 90%;
        }
        #mobilet {
          display: block;
          visibility: visible;
        }
        #maint{
          display: none;
          visibility: hidden;
        }
      }
    #contents {
      
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;

      }
    }


`


const GridContainer = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 10px;
  .element {
    width: 400px;
    height: 400px;
    background-color: pink;

  }
  @media (max-width: 425px) {
    .element {
    width: 90vw;
    height: 90vw;
    margin: 5vw;;
  }
  }

`


const Features = () => {
  return (
    <>
      <FeaturesContainer>
        <div   >
        <h2 id='maint' className='m-4' >Buying a home shouldn't be a mystery</h2>
        </div>
          <div id="contents" className='d-flex f-direction-column justify-content-center align-items-center ' >
            <div  id='texts' >
              <p  >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo
              </p>
              <br />
              <p  >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo
              </p>
              <br />
              <p  >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo
              </p>
            </div>
            <div id='imagecont'>
            <StaticImage
            style={{width: "100%"}}
            src='../../images/features.webp'
            alt='jopa'
            />
            </div>
            
          </div>
          <h2 id='mobilet' className='m-4' >Buying a home shouldn't be a mystery</h2>
          
      </FeaturesContainer>
      <FeaturesContainer>
        <GridContainer>
        <div className='element' >sdds</div>
        <div className='element' >sdds</div>
        <div className='element' >sdds</div>
        </GridContainer>
      </FeaturesContainer>
    </>
    
    
  )
}

export default Features