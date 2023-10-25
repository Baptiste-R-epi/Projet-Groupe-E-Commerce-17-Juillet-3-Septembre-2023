import React from "react";
import Header from "../components/Header";
import { createGlobalStyle } from "styled-components";
import Shopcart from "../components/form/CartForm";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: black;
    color: white;
  }
`;

function Shopcard() {
  return (
    <>
      <Header />
      <Shopcart />
      <GlobalStyle />
    </>
  );
}

export default Shopcard;
