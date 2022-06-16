import React from "react";
import NavBar from "src/pages/components/NavBar";
import Home from "src/pages/components/Home";
import Features from "src/pages/components/Features";
import Form from "src/pages/components/Form";
import Service from "src/pages/components/Service";
import FooterComp from "src/pages/components/FooterComp";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Features />
      <Form />
      <Service />
      <FooterComp />
    </>
  );
};

export default App;
