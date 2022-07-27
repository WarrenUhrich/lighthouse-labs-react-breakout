import './App.css';
import AnimeList from './components/AnimeList';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <h1>React Breakout</h1>
      <Calculator
        heading="React Breakout Calculator"
        additionMessage="Congrats! You succesfully added and got: "
        subtractionMessage="Subtraction! What's the difference!? "
        multiplicationMessage="Don't know your times tables yet? Here's the answer: "
        divisionMessage="Hope you didn't divide by zero... divide and conquer: "
      />
      <AnimeList  />
    </div>
  );
}

export default App;
