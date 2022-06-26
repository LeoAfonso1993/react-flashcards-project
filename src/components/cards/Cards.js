import React, { useState } from "react";
import Flag from "../flag/Flag";
import { Card, Button } from 'react-bootstrap';
import cardCSS from './Cards.module.css'



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
        <Card key={id} style={{ maxwidth: '22rem', marginTop: '20px', marginLeft: '20px', marginRight: '20px'}}>
                <Card.Body className={cardCSS.content}>
                    <Flag handleFlagClick={handleFlagClick} flagChange={flagChange}/>
                    <Card.Title>
                        {question}        
                    </Card.Title>
                    <Card.Text className={isHidden ? "hideAndShow" : ""}>
                    {answer}
                    </Card.Text>
                    <Button className={cardCSS.btn} onClick={handleClick} variant="dark">{isHidden ? "Answer" : "Hide"}</Button>
                    <Button className={cardCSS.btn} onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>
        )
}

export default Cards;