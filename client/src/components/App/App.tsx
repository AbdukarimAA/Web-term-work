import React, {useEffect, useState} from "react";
import Header from "../Header/Header";

import "./app.css";
import Nav from "../Nav/Nav";
import Section from "../Section/Section";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import axios from "axios";

const App = () => {
    const [pulse, setPulse] = useState<[]>([])

    useEffect(() => {
        const getPulses: any = async () => {
            await axios.get('http://localhost:8700/api/pulse/getAllPulse')
                .then(res => {
                    setPulse(res.data)
                })
        }

        getPulses();
    }, [])

  return (
    <>
      <Header />
      <div className="main-wrapper">
        <Nav />
        <Section data={pulse} key={pulse}/>
        <Aside />
      </div>
      <Footer />
    </>
  );
};

export default App;
