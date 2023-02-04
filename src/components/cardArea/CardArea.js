import React, { useEffect, useState } from "react";
import Cards from "../cards/Cards";
import { Row, Col } from 'react-bootstrap'; 
import './CardArea.css'


function CardArea({titleChange}) {

    const [flashCards, setFlashCards] = useState([])

    useEffect(() => {
        fetch('http://my-json-server.typicode.com/LeoAfonso1993/react-flashcards-project/blob/main/db.json')
        .then((response) => response.json())
        .then((item) => setFlashCards(item))
    },[])


    const allTheCards = flashCards.map((flashcard) => {

        return (
            <Col>
            <Cards
            id={flashcard.id}
            question={flashcard.question}
            answer={flashcard.answer}
            flashCards={flashCards}
            setFlashCards={setFlashCards}
            />
            </Col>
        )
    })
    
    
    return (
        <>
            {titleChange("TechPrep | My Cards")}
            <Row xs={1} sm={2} md={3} className="g-4">
                {allTheCards}
            </Row>
        </>
    )
}

export default CardArea;