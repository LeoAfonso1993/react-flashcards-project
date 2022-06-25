import React, { useState } from "react";
import Flag from "../flag/Flag";
import { Card, Button } from 'react-bootstrap';
import CardCSS from './Cards.module.css'


function Cards({question, answer, id, flashCards, setFlashCards}) {

    const [isHidden, setIsHidden] = useState(true)
    const [flagChange, setFlagChange] = useState(false)
    const newCardList = [...flashCards]

    function handleClick() {
        console.log(id)
        return setIsHidden(() => !isHidden)
    }

    
    function handleDelete() {
        fetch(`http://localhost:3000/myCards/${id}`, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then(() => {
            const updatedList = newCardList.filter((item) => item.id !== id)
            setFlashCards(updatedList)       
        })
    }


    function handleFlagClick() {
        return setFlagChange(() => !flagChange)
    }
    
    return (
        <Card key={id} style={{ width: '18rem' }}>
                <Card.Body>
                    <Flag handleFlagClick={handleFlagClick} flagChange={flagChange}/>
                    <Card.Title className={CardCSS.cardTitle}>
                        {question}        
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Click here to see the answer</Card.Subtitle>
                    <Card.Text className={isHidden ? "hideAndShow" : ""}>
                    {answer}
                    </Card.Text>
                    <Button onClick={handleClick} variant="dark">{isHidden ? "See the answer" : "Hide"}</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>
        )
}

export default Cards;