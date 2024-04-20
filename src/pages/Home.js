import React, {useEffect} from "react";
import Hero from "../components/UI/Hero";
import AboutHome from "../components/UI/AboutHome";
import WhatWeDo from "../components/UI/WhatWeDo";
import ScrollButton from "../components/UI/ScrollButton";

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div>
            <ScrollButton />
            <Hero />
            <AboutHome />
            <WhatWeDo />
        </div>
    )
};

export default Home;