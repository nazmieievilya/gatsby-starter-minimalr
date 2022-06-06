import * as React from "react";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from "../globalStyles/globalStyles";
import 'bootstrap/dist/css/bootstrap.css';
import App from "./components/App";


const IndexPage = () => {
 
 
  return (
    <>
      <GlobalStyle />
      <App />
    </>
    
  )
}

export default IndexPage
