import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Products from "./components/Products";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    border-color: red;
    margin-top: 28%;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <PropagateLoader
          color={"#3d2514"}
          loading={loading}
          css={override}
          size={40}
        />
      ) : (
        <>
          <Navbar />
          <Header />
          <Products />
        </>
      )}
    </div>
  );
}

export default App;
