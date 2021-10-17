import React, { useState } from "react";
import "./styles.css";

const animalDictionary = {
  "🦏": "Rhinoceros",
  "🐏": "Ram",
  "🦙": "Llama",
  "🦛": "Hippopotamus",
  "🐫": "Two-Hump Camel",
  "🐿️": "Chipmunk",
  "🦘": "Kangaroo",
  "🦡": "Badger"
};

var eD = Object.keys(animalDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function aIH(event) {
    var userInput = event.target.value;
    var meaning = animalDictionary[userInput];
    if (meaning == undefined) {
      meaning = "Oops!! Which animal is that!";
    }
    setMeaning(meaning);
  }
  function emojiCH(emoji) {
    var meaning = animalDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Animal Names</h1>
      <input onChange={aIH}></input>
      <h2> {meaning}</h2>
      <h3>Animals in the List</h3>
      {eD.map(function (emoji) {
        return (
          <span
            onClick={() => emojiCH(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
