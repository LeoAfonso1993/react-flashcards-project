import React, { useState } from "react";
import newcCSS from "./NewCards.module.css"
import { Button } from 'react-bootstrap';


function NewCards({titleChange}) {

    const [newCardData, setNewCardData] = useState({
        question: "",
        answer: "",
        flag: false,
        rightCounter: 0,
        wrongCounter: 0
    })

    function handleChange(e) {
        setNewCardData({
            ...newCardData,
            [e.target.name]: e.target.value,
         })  
    }

    function handleSubmit(e){
        e.preventDefault();
        

        const postNewCard = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                question: newCardData.question,
                answer: newCardData.answer,
                flag: false,
                rightCounter: parseInt(newCardData.rightCounter),
                wrongCounter: parseInt(newCardData.wrongCounter)
            })
        }

        fetch("http://localhost:3000/myCards", postNewCard)
        .then((response) => response.json())
        .then((item) => console.log(item))
        .then(() => {
            setNewCardData({
                question: "",
                answer: "",
                flag: false,
                rightCounter: 0,
                wrongCounter: 0
            })
        })
        .then(() => window.alert('Card added successfully!'))
    }



    

    return (
        <>
            {titleChange("TechPrep | New Card")}
            <form className={newcCSS.newCardForm} onSubmit={handleSubmit}>
            <input
            className={newcCSS.question} 
            type="text" 
            name="question" 
            placeholder="Question" 
            onChange={handleChange}
            value={newCardData.question}></input>
            <input 
            className={newcCSS.question}
            type="text" 
            name="answer"
            value={newCardData.answer} 
            placeholder="Answer"
            onChange={handleChange}>
            </input>
            <Button type="Submit" className={newcCSS.btn} >Add New Card</Button>
            </form>
        </>
    )
}

export default NewCards;