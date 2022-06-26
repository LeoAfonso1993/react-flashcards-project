import React from "react";
import txtCSS from "./Home.module.css"

function Home({titleChange}){
    return ( 
        <div className={txtCSS.txt}>
            {titleChange("TechPrep | Home")}
            <h1>Welcome</h1>
            <h6>This is your technical interview flash card app and it's being            developed by someone like you. A tech student building a portfolio and
            getting ready for technical interviews.
            I have pre-added a few React.js cards to /mycard page. Feel free to flag the ones you need to focus on and to delete the ones you've mastered. You can also add your own cards on the /newcard page.
            I wish you the best in studying!
            </h6>
            <h6>@devproleo</h6>
        </div>
)}

export default Home;