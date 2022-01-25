import './App.scss';

import GameCard from './gameCard/GameCard';

function App() {
  return (
    <div className="App">
      <h1 className="title-text">Hero Jumper</h1>

      <fieldset className="currentGamesFieldset">
        <legend className="currentGamesFieldsetLegend">Current Games</legend>

        <GameCard gameName="Test Game" />
      </fieldset>

    </div>
  );
}

document.addEventListener('contextmenu', event => event.preventDefault());

export default App;
