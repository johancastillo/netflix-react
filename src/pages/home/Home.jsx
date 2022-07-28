import React from 'react';
import Header from '../../components/header/Header';
import Preloader from '../../components/preloader/Preloader';
import axios from "axios";
import Slider from '../../components/slider/Slider';
import {useEffect, useState} from "react";
import CoverHero from '../../components/cover-hero/CoverHero';
import "./Home.css"

const Home = () => {

    const [data, setData] = useState("")

    useEffect(() => {
        axios.get("http://localhost:4000/jsonapi/node/article")
        .then(res => {
            console.log(res.data.data);
            setData(res.data.data);
        })
        .catch(err => console.error(err))
      }, [])

    return (
        <div>
            {/* <Preloader /> */}
            <Header />

            <main>
                <CoverHero />
                <Slider />
            </main>

            <h1 className="att-title">
                Soy es hampa att: Jc Johan <br /> (nombre de hacker G4m3 0v3r)
            </h1>



        </div>
    );
}

export default Home;
