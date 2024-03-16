import { useState } from 'react';
import './App.css';

const cards = [
  { title: "Mona Lisa's Smile", description: "Leonardo da Vinci's Mona Lisa is famous for its elusive smile, painted with a sfumato technique." },
  { title: "Van Gogh's Starry Night", description: "This masterpiece was created by Vincent van Gogh during his time at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence." },
  { title: "Michelangelo's David", description: "Michelangelo's Renaissance masterpiece, David, was sculpted from a single block of marble between 1501 and 1504." },
  { title: "The Scream by Edvard Munch", description: "Edvard Munch's iconic piece, The Scream, has become one of the most famous images of art, symbolizing the anxiety of the human condition." },
  { title: "The Persistence of Memory", description: "Salvador Dalí's famous surrealistic work, known for its melting clocks, explores the concept of softness and hardness." }
];

const InsertTextButton = ({ insertText, checkGuess }) => {
  const [text, setText] = useState("");

  const handleInsertText = () => {
    insertText(text); // Insert text into the state
    checkGuess(); // Check the guess when text is inserted
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleInsertText}>Submit Guess</button>
    </div>
  );
};
function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [guessCorrect, setGuessCorrect] = useState(null);
  const [insertedText, setInsertedText] = useState(""); // State to store inserted text

  const handleNext = () => {
    setIsFlipped(false);
    const nextIndex = (currentCardIndex + 1) % cards.length;
    setCurrentCardIndex(nextIndex);
    setGuessCorrect(null);
    setInsertedText(""); // Reset inserted text
  };

  const handleBack = () => {
    setIsFlipped(false);
    const nextIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    setCurrentCardIndex(nextIndex);
    setGuessCorrect(null);
    setInsertedText(""); // Reset inserted text
  };

  const toggleFlip = () => {
    if (insertedText.trim() !== "") { // Check if a guess has been submitted
      setIsFlipped(!isFlipped);
    }
  };
  
  const insertText = (text) => {
    setInsertedText(text); // Update inserted text state
  };

  const checkGuess = () => {
    const correctAnswer = cards[currentCardIndex].description.toLowerCase().trim();
    const normalizedInsertedText = insertedText.toLowerCase().trim();

    if (correctAnswer === normalizedInsertedText) {
      setGuessCorrect(true);
    } else {
      setGuessCorrect(false);
    }
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
            <h1>{cards[currentCardIndex].title}</h1>
          </div>
          <div className="flip-card-back">
            <p>{isFlipped ? cards[currentCardIndex].description : "Insert your guess here"}</p>
          </div>
        </div>
      </div>
      <h1> Guess the Answer</h1>
      <InsertTextButton insertText={insertText} checkGuess={checkGuess} />
      {guessCorrect !== null && (
        <p>{guessCorrect ? "Correct!" : "Incorrect!"}</p>
      )}
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}


export default App;
