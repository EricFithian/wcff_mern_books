import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateGame from './pages/CreateGame';
import GameList from './pages/ShowGameList';
import UpdateGame from './pages/UpdateGameInfo';
import ShowGameDetails from './pages/ShowGameDetails';

function App() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={GameList} />
          <Route path='/create-awesome-game' component={CreateGame} />
          <Route path='/edit-cool-game/:id' component={UpdateGame} />
          <Route path='/show-cool-game/:id' component={ShowGameDetails} />
        </div>
      </Router>
    )
}

export default App;
