import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🥰": "Smiling Face with Hearts",
  "🔥": "Fire",
  "😊": "Smiling Face with Smiling Eyes",
  "🥺": "Pleading Face",
  "😂": "Face with Tears of Joy",
  "😥": "sad",
  "😐": "Neutral Face",
  "😉": "Winking Face",
  "💀": "extremely dangerous",
  "👽": "Alien",
  "🎃": "Pumpkin lantern",
  "🥡": "takeout box",
  "👐": "affection and openness or hug",
  "👏": "Clapping Hands",
  "👍": "Well done!",
  "👎": "rejection, disapproval and dislike",
  "✌": "Victory Hand",
  "👌": "Ok Hand Sign",
  "✋": "Raised Hand",
  "👋": "wave",
  "💪": "strong",
  "👣": "Footprints",
  "💃": "dancing",
  "🤛": "Left-Facing Fist",
  "👊": "Oncoming Fist"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    // console.log(meaning);
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    // console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emojis For </h1>
      <small>
        <i>smileys,people,Hand gestures,clothing</i>
      </small>
      <input
        placeholder="🔎 click one from below"
        onChange={emojiInputHandler}
      ></input>
      <div>{meaning}</div>
      <h3>Emojis We Know</h3>
      <div className="emojiwrapper">
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "xxx-large",
                cursor: "pointer"
                // padding: "1rem"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
