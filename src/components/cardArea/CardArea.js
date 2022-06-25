import React, { useEffect, useState } from "react";
import Cards from "../cards/Cards";
import { Row, Col } from 'react-bootstrap'; 


function CardArea() {

    const [flashCards, setFlashCards] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/myCards')
        .then((response) => response.json())
        .then((item) => setFlashCards(item))
    },[])



    const allTheCards = flashCards.map((flashcard) => {

        return (
            <Cards
            id={flashcard.id}
            question={flashcard.question}
            answer={flashcard.answer}
            flashCards={flashCards}
            setFlashCards={setFlashCards}
            />
        )
    })
    
    
    return (
        <>
            <Row xs={2} md={2} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                {allTheCards}
                </Col>
            ))}
            </Row>
        </>
    )
}

export default CardArea;