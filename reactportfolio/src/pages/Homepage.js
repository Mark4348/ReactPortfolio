import React from "react";
import Hero from "../Components/Hero"
import Carousel from "../Components/Carousel"

function Homepage(props) {
    return (
        <div>
        <Hero title={props.title}
            subtitle={props.subtitle}
            text={props.text}
        />
        <Carousel />
        </div>
    );    

}

export default Homepage;