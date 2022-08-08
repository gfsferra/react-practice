import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function emojiCard(contact) {
  return (
    <Card name={contact.name} emoji={contact.emoji} meaning={contact.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emojiCard)}</dl>
    </div>
  );
}

export default App;
