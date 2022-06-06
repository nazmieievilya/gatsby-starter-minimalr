import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 30vw;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  @media (max-width: 800px) {
    height: 70vw;
  }
`;

const Form = () => {
  return (
    <FormContainer>
      <div>
        <h1 className="text-center py-3 display-6 px-4 text-light">
          Sign Up Now!
        </h1>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="youremail@gmail.com"
          />
          <button className="btn btn-primary">Join</button>
        </form>
      </div>
    </FormContainer>
  );
};

export default Form;
