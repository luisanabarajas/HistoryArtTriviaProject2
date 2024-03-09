import { useState } from 'react';
import './App.css';

const cards = [
  { title: "Mona Lisa's Smile", description: "Leonardo da Vinci's Mona Lisa is famous for its elusive smile, painted with a sfumato technique." },
  { title: "Van Gogh's Starry Night", description: "This masterpiece was created by Vincent van Gogh during his time at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence." },
  { title: "Michelangelo's David", description: "Michelangelo's Renaissance masterpiece, David, was sculpted from a single block of marble between 1501 and 1504." },
  { title: "The Scream by Edvard Munch", description: "Edvard Munch's iconic piece, The Scream, has become one of the most famous images of art, symbolizing the anxiety of the human condition." },
  { title: "The Persistence of Memory", description: "Salvador Dalí's famous surrealistic work, known for its melting clocks, explores the concept of softness and hardness." }
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Track the current card index
  const [isFlipped, setIsFlipped] = useState(false); // State to track the flipped status of the card

  const handleNext = () => {
    // Ensure card is not flipped when moving to the next card
    setIsFlipped(false);
    // Select a random card
    let nextIndex = Math.floor(Math.random() * cards.length);
    while (nextIndex === currentCardIndex) {
      nextIndex = Math.floor(Math.random() * cards.length); // Ensure a new card is always selected
    }
    setCurrentCardIndex(nextIndex);
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped); // Toggle the isFlipped state
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Unveiling Art Mysteries</h1>
        <h2>Number of Cards: 5</h2>
        <p>This collection invites you on a journey to explore the hidden stories, surprising facts, and the sheer genius of the most iconic artworks and their creators. From the enigmatic smiles of painted figures to the passionate strokes of rebellion, each card reveals a piece of the puzzle that has shaped our artistic heritage.</p>
      </div>

      <div className="flip-card" onClick={toggleFlip}>
        <div className="flip-card-inner" style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
          <div className="flip-card-front">
            {/* Display the title or the description based on flip state */}
              <h1>{cards[currentCardIndex].title}</h1>
          </div>
          <div className="flip-card-back">
          <p>{cards[currentCardIndex].description}</p>
          </div>
        </div>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
