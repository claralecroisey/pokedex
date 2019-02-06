import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import './App.css';
import Pokemon from './components/Pokemon/Pokemon';
import DetailPage from './components/Detail/DetailPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderPokemonsList = this.renderPokemonsList.bind(this);
  } 
  
  renderPokemonsList() {
    return (
      <div className="pokemons-list">
        <Pokemon idPokemon={1} />
        <Pokemon idPokemon={2} />
        <Pokemon idPokemon={3} />
        <Pokemon idPokemon={4} />
        <Pokemon idPokemon={5} />
        <Pokemon idPokemon={6} />
        <Pokemon idPokemon={7} />
        <Pokemon idPokemon={8} />
        <Pokemon idPokemon={9} />
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Pokedex
          <nav>
            <Link to='/'>Home</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" render={() => this.renderPokemonsList()} />
            <Route path="/detail_page/:id" component={DetailPage} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
