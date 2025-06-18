import { useState } from 'react';
import Flashcard from './Flashcard.jsx';

function App() {
  const cards = [
    { question: "Which blood type is the universal donor?", answer: "O negative" },
    { question: "What language is used for styling web page", answer: "CSS" },
    { question: "What language is spoken in Brazil?", answer: "Portuguese" },
    { question:"what is the difference between an exothermic and endothermic reaction",answer:"Exothermic releases haeat, endothermic absorbs heat."}
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="app">
      <h1>🌍 World Trivia Flashcards</h1>
      <p>Test your knowledge with random questions!</p>
      <p>Total Cards: {cards.length}</p>
      <Flashcard card={cards[currentIndex]} />
      <button onClick={handleNext}>Next Card</button>
    </div>
  );
}

export default App;

