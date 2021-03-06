import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const FeaturesContainer = styled.div`
  background-color: blueviolet;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  width: 100%;
  #texts {
    width: 40%;
    margin-top: 10px;
  }
  #mobilet {
    display: none;
    visibility: hidden;
  }

  @media (min-width: 1500px) {
    #texts {
      p {
        font-size: 1.1vw;
      }
    }
  }
  #imagecont {
    margin: 10px;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 0;
    #texts {
      width: 90%;
    }
    #mobilet {
      display: block;
      visibility: visible;
    }
    #maint {
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
`;

const GridContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin: 0;
  margin-top: 5vw;
  margin-bottom: 5vw;
  padding: 0;
  .card {
    width: 400px;
  }
  @media (min-width: 1289px) {
    display: flex;
    justify-content: space-around;
    .card {
      height: 400px;
      width: 600px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .card {
      width: 95vw;
    }
  }
`;

const Features = () => {
  return (
    <>
      <FeaturesContainer id="features">
        <div>
          <h2 id="maint" className="m-4">
            Buying a home shouldn't be a mystery
          </h2>
        </div>
        <div
          id="contents"
          className="d-flex f-direction-column justify-content-center align-items-center "
        >
          <div id="texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolo
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolo
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolo
            </p>
          </div>
          <div id="imagecont">
            <StaticImage
              style={{ width: "100%" }}
              src="../../images/features.webp"
              alt="jopa"
            />
          </div>
        </div>
        <h2 id="mobilet" className="m-4">
          Buying a home shouldn't be a mystery
        </h2>
      </FeaturesContainer>
      <FeaturesContainer>
        <GridContainer>
          <div className="card mx-2">
            <StaticImage
              style={{ width: "100%" }}
              src="../../images/laptop.jpg"
              alt="jopa"
            />

            <div className="card-body">
              <h5 className="card-title">title</h5>
              <p className="card-text">text lorem pipsum</p>
            </div>
          </div>

          <div className="card mx-2">
            <StaticImage
              style={{ width: "100%" }}
              src="../../images/human.jpeg"
              alt="jopa"
            />
            <div className="card-body">
              <h5 className="card-title">title</h5>
              <p className="card-text">text lorem pipsum</p>
            </div>
          </div>

          <div className="card mx-2">
            <StaticImage
              style={{ width: "100%" }}
              src="../../images/gun.jpg"
              alt="jopa"
            />
            <div className="card-body">
              <h5 className="card-title">title</h5>
              <p className="card-text">text lorem pipsum</p>
            </div>
          </div>
        </GridContainer>
      </FeaturesContainer>
    </>
  );
};

export default Features;
