import { useState } from 'react';
import Flashcard from './Flashcard.jsx';

function App() {
  const originalCards = [
    
    {question:"what car is this",
      answer:" koiensegg",
      image:"/images/car.jpg",
      category:"hard"
    },
     {
    question: "Apple",
    answer: "Manzana",
    category: "easy"
  },
  {
    question: "Dog",
    answer: "Perro",
    category: "easy"
  },
  {
    question: "Thank you",
    answer: "Gracias",
    category: "easy"
  },
  {
    question: "Library",
    answer: "Biblioteca",
    category: "medium"
  },
  {
    question: "To run",
    answer: "Correr",
    category: "medium"
  },
  {
    question: "What is the Spanish word for 'school'?",
    answer: "Escuela",
    category: "medium"
  },
  {
    question: "Translate 'blue' to Spanish",
    answer: "Azul",
    category: "easy"
  },
  {
    question: "Translate 'car' to Spanish",
    answer: "Coche",
    category: "easy"
  },
  {
    question: " Guess the country by the flag:",
    answer: "Vatican",
    image: "/images/vatican.jpg",
    category: "easy"
  },
  {
    question: " Guess the country by the flag:",
    answer: "Japan",
    image: "/images/japan.avif",
    category: "easy"
  },
  {
    question: " Guess the country by the flag:",
    answer: "India",
    image: "/images/india.webp",
    category: "medium"
  },
  {
    question: " Guess the country by the flag:",
    answer: "Tuvalau",
    image: "/images/Tuvalau.webp",
    category: "hard"
  },
  {
    question: " Guess the country by the flag:",
    answer: "Chile",
    image: "/images/chile.webp",
    category: "medium"
  },
  {
    question: " Guess the country by the flag:",
    answer: "Bahamas",
    image: "/images/Bahamas.jpeg",
    category: "medium"
  },
  {
    question: " Guess the country by the flag:",
    answer: "Burundi",
    image: "/images/Burundi.jpeg",
    category: "easy"
  }
  ];

  const [cards, setCards] = useState(originalCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [shuffled, setShuffled] = useState(false)

const [currentStreak, setCurrentStreak] = useState(0);
const [longestStreak, setLongestStreak] = useState(0);
const [masteredCards, setMasteredCards] = useState([]);

const normalize = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]/gi, "").trim(); // removes punctuation & case

const handleCheckAnswer = () => {
  const correct = normalize(cards[currentIndex].answer);
  const user = normalize(guess);

  const isMatch =
    correct.includes(user) || user.includes(correct); // partial match in either direction

  setIsCorrect(isMatch);

  // 🔥 Streak logic
  if (isMatch) {
    setCurrentStreak((prev) => prev + 1);
    setLongestStreak((prev) =>
      currentStreak + 1 > prev ? currentStreak + 1 : prev
    );
  } else {
    setCurrentStreak(0);
  }
};

const goToNext = () => {
  setCurrentIndex((prev) => prev + 1);
  setGuess("");
  setIsCorrect(null);
};

const goToPrevious = () => {
  setCurrentIndex((prev) => prev - 1);
  setGuess("");
  setIsCorrect(null);
};


const handleShuffle = () => {
  const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
  setCards(shuffledCards);
  setCurrentIndex(0);
  setGuess("");
  setIsCorrect(null);
  setShuffled(true);
};
const markMastered = () => {
  const currentCard = cards[currentIndex];
  setMasteredCards([...masteredCards, currentCard]);

  const remaining = cards.filter((_, idx) => idx !== currentIndex);
  setCards(remaining);

  // Reset to first card or previous index if needed
  setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  setGuess("");
  setIsCorrect(null);
};



  return (
    <div className="app">
      <h1>🌍 World Trivia Flashcards</h1>
      <p>Test your knowledge with random questions!</p>
      <p>Total Cards: {cards.length}</p>
      <Flashcard card={cards[currentIndex]} />
      <p>🔥 Streak: {currentStreak}</p>
<p>🏆 Longest Streak: {longestStreak}</p>

<p>Guess the answer before flipping card</p>
<input
  type="text"
  placeholder="Type your answer here..."
  value={guess}
  onChange={(e) => setGuess(e.target.value)}
/>

<button onClick={() => handleCheckAnswer()}>Submit your Guess</button>

{isCorrect === true && <p style={{ color: "green" }}>✅ Correct!</p>}
{isCorrect === false && <p style={{ color: "red" }}>❌ Try again!</p>}

<div style={{ marginTop: "10px" }}>
  
 <button
    onClick={goToPrevious}
    disabled={currentIndex === 0}
  >
    ⬅ Prev
  </button>

  <button
    onClick={goToNext}
    disabled={currentIndex === cards.length - 1}

  >
    ➡ Next
  </button>
{currentIndex === 0 && <p style={{ color: '#888' }}>You're at the first card</p>}
{currentIndex === cards.length - 1 && <p style={{ color: '#888' }}>You've reached the last card</p>}


  <button onClick={handleShuffle}>🔀 Shuffle Cards</button>
{shuffled && <p style={{ color: "#888" }}>Cards are shuffled</p>}
<button onClick={markMastered}>Mark as Mastered</button>
<p>✅ Mastered: {masteredCards.length}</p>

</div>
</div>
  );
}

export default App;

