import React from "react";
import Header from "../components/Header";
import { createGlobalStyle } from "styled-components";
import DeliveryForm from "../components/form/DeliveryForm";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: black;
    color: white;
  }
`;
export default function delivery() {
  return (
    <>
      <Header />
      <DeliveryForm />
      <GlobalStyle />
    </>
  );
}
