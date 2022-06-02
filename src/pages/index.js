import * as React from "react"
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from "../globalStyles/globalStyles"
import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home";
import Features from './components/Features'
const IndexPage = () => {
 
 
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Home />
      <Features />
      
      
    </>
    
  )
}

export default IndexPage
