import React from "react";
import styled from "styled-components";
const ServiceContainer = styled.div`
 
  background-color: white;
`;
const Service = () => {
  return (
    <ServiceContainer>
      <section className="py-5">
        <div className="container">
          <div className="col-12 col-md-6 p-4">
            <div className="row">
              <div className="col-12 col-md-2 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
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
            </div>
          </div>
        </div>
      </section>
    </ServiceContainer>
  );
};

export default Service;
