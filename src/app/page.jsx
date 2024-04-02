"use client"
import React, { useState, useEffect } from "react";
import { getDictionaryData } from "./apiCalls/dictionary.js"; // Make sure the path is correct

export default function Home() {
  const [refinedData, setRefinedData] = useState(null); // Starting with null or an appropriate default state

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDictionaryData(); // This is an async call
        console.log("Fetched data:", data); // Logging to see the fetched data
        setRefinedData(data); // Update state with the fetched data
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchData();
  }, []); // Dependency array is empty, so this effect runs once on mount

  return (
    <div className="container">
      <img className="exampleImg" src="example.png" alt="Example" />
      <div className="inputSection">
        <form className="userInput">
          <input
            type="text"
            id="userAnswer"
            placeholder="Use the phonetic to guess the word..."
          />
          <button type="button" id="submitBTN">Guess</button>
        </form>
        {refinedData && (
          <>
            <button id="hintBTN" style={{ marginLeft: '10px' }}>Hint?</button>
            <div>
              <p>Word: {refinedData.word}</p>
              <p>Phonetic: {refinedData.phonetic}</p>
              <div>
                Definitions:
                {refinedData.definition.map((def, index) => (
                  <p key={index}>{def}</p>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}