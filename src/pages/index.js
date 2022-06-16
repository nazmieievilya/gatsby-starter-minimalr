import * as React from "react";
import { GlobalStyle } from "../globalStyles/globalStyles";
import "bootstrap/dist/css/bootstrap.css";
import App from "src/pages/components/App";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  );
};

export default IndexPage;
