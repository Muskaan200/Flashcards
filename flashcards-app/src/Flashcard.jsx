import { useState } from 'react';

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);
 if (!card) return null;
  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flashcard ${card.category}`} onClick={handleClick}>
      {!flipped ? (
        <>
          <h2>{card.question}</h2>
          {card.image && <img src={card.image} alt="flashcard visual" style={{ width: '100%', maxHeight: '200px', objectFit: 'contain', marginTop: '10px' }} />}
        </>
      ) : (
        <h2>{card.answer}</h2>
      )}
    </div>
  );
}

export default Flashcard;
