"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css"
import React, { useState, useEffect } from "react";

export default function Game() {

    useEffect(() => {
        getRandomWord();
    }, [])
    //Use effect with empty depednecy - works once on page load
    //Initial API call to random word api call/function - imported from API file
    // save imported api data in state
    

    
 return(
    <div className="container">
       <img className="exampleImg" src="example.png" alt="Example"></img>
       <div className="inputSection">
        <form className="inputForm">
            <input type="text" id="userAnswer" placeholder="Use the phonetic to guess the word..." />
            <button id="submitBTN">Guess</button>
        </form>
          
       </div>
   </div>
 )
}







//           <input type="text" id="userAnswer" placeholder="Use the phonetic to guess the word..." value={userAnswer} onChange={handleInputChange}/>
//           <button id="submitBTN" onClick={handleGuess}>Guess</button>
//       {refinedData.length > 0 && (
//         <button id="hintBTN" onClick={toggleHints} style={{ marginLeft: '10px' }}>Hint?</button>
//       )}
//     </div>
//     {phoneticsData && (
//       <div className="phonetics" id="phoneticsOutput">
//         <p>{phoneticsData}</p>
//       </div>                                                            
//     )}
//     {showHints && refinedData.length > 0 && (
//       <div className="hintsContainer">
//         {refinedData[0].definitions.slice(0, 3).map((definition, index) => (
//           <div key={index} className="hint">
//             {definition}
//           </div>
//         ))}
//       </div>
//     )}
//   </div>
// );
// }