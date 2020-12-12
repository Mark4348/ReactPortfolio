import React from "react";

import Card from "./Card";

import EventSafe from "../assets/images/EventSafe.png";
import EventSafe2 from "../assets/images/EventSafe2.png";
import PasswordGenerator from "../assets/images/PasswordGenerator.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"

class Carousel extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                id: 0,
                title: 'Dev Grub',
                subtitle: "The cookbook for developers",
                //image demenstions are 1000 wide 1600 tall
                imgSrc: EventSafe,
                link: 'https://github.com',
                selected: false
            },
            {
                id: 1,
                title: 'Dev Grub',
                subtitle: "The cookbook for developers",
                imgSrc: EventSafe2,
                link: 'https://github.com',
                selected: false
            },
            {
                id: 2,
                title: 'Dev Grub',
                subtitle: "The cookbook for developers",
                imgSrc: PasswordGenerator,
                link: 'https://github.com',
                selected: false
            }
            ]
        }
    }
    
    // handles what displays when the card is clicked
    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    //Method that maps throught items and creates card
        makeItems = (items) => {
            return items.map(item => {
                return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
            })
        }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel;