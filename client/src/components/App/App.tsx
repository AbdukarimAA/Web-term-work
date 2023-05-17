import React from "react";
import Header from "../Header/Header";

import "./app.css";
import Nav from "../Nav/Nav";
import Section from "../Section/Section";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <Nav />
        <Section />
        <Aside />
      </div>
      <Footer />
    </>
  );
};

export default App;
