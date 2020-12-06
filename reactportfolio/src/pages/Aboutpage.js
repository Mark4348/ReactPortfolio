import React from "react";

import Hero from "../Components/Hero";
import Content from "../Components/Content";

function Aboutpage(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hey! My names Mark Aguilar and was born and raised in Houston, Texas.
            Im a full stack engineer with experience in Javascript, Express, NodeJS, Oracle SQL
            MongoDB, and React.</p>

            <p>My dream one day is to gain the skills, knowledge, and experience to become an entre
            preneur and start my own business.</p>
            
            <p>The skills that im building up throughout my programming journey will create a foundation
              for me to launch from and create some impressive projects!</p>
            </Content>
        </div>
    );    

}

export default Aboutpage;