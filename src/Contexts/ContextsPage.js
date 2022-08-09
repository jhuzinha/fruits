import React from "react";
import { useState } from "react";
import { Context } from "./DefaultContext";

export default function ContextProvider(props) {
  const [bodyCart, setBodyCart] = useState([]);
  return (
    <Context.Provider
      value={{
        bodyCart,
        setBodyCart
      }}
    >
      {props.children}
    </Context.Provider>
  );
}