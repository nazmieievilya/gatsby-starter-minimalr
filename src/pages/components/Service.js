import React from "react";
import styled from "styled-components";

const ServiceContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 30vw;
  
  .serviceCont {
    display: flex;
    height: 10vw;
    width: 20vw;
    

  }
  h3 {
    padding: 0;
    color: black;
    font-size: 3vw;
  }
  p {
    color: black;
    font-size: 3vw;
  }
  @media (max-width: 768px) {
    padding: 0px;
    justify-content: center;
    .serviceCont {
      display: flex;
      height: 20vw;
      width: 40vw;
      margin: 10px;

      padding: 0px;
    }
  }
`;
const Service = () => {
  return (
    
    <ServiceContainer>
      <div className="serviceCont">
        <div className="text-primary me-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5vw"
            height="5vw"
            fill="currentColor"
            class="bi bi-person-hearts"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"
            />
          </svg>
        </div>
        <div>
          <h3>Total transpatency</h3>
          <p>lorem pipsum </p>
        </div>
      </div>
      <div className="serviceCont">
        <div className="text-primary me-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5vw"
            height="5vw"
            fill="currentColor"
            class="bi bi-person-hearts"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"
            />
          </svg>
        </div>
        <div>
          <h3>Total transpatency</h3>
          <p>lorem pipsum </p>
        </div>
      </div>
      <div className="serviceCont">
        <div className="text-primary me-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5vw"
            height="5vw"
            fill="currentColor"
            class="bi bi-person-hearts"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"
            />
          </svg>
        </div>
        <div>
          <h3>Total transpatency</h3>
          <p>lorem pipsum </p>
        </div>
      </div>
    </ServiceContainer>
  );
};

export default Service;
