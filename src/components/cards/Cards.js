import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap'; 

function Cards({question, answer, id, flashCards, setFlashCards}) {

    const [isHidden, setIsHidden] = useState(true)
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

    
    return (
        <Card key={id} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>
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