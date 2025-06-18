import { useState } from 'react';

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flashcard" onClick={handleClick}>
      <h2>{flipped ? card.answer : card.question}</h2>
    </div>
  );
}

export default Flashcard;
