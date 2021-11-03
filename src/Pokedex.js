import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
  constructor() {
      super()
      this.state = {
          currIndex: 0,
          defaultArray: pokemons,
          currArray: pokemons,
      }
      this.one = this.one.bind(this)
      this.next = this.next.bind(this)
      this.arrayFilter = this.arrayFilter.bind(this)
  }
  
  one(array) {
      return array[this.state.currIndex]
  }

  next() {
    if ((this.state.currIndex + 1) < this.state.currArray.length) {
    this.setState((anterior) => ({ currIndex: anterior.currIndex + 1}))
    }
    else this.setState(() => ({ currIndex: 0 }));
  }

  arrayFilter(string) {
    if (string === 'reset') {
      this.setState(() => ({ currArray: pokemons, currIndex: 0 }))
    }
    else {
      const newArray = this.state.defaultArray.filter(curr => curr.type === string);
      this.setState(() => ({ currArray: newArray, currIndex: 0 }))
    }
  }

  render() {
    return (
      <main>
        <div className="pokedex">
          {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
          <Pokemon pokemon={ this.one(this.state.currArray) }/>
        </div>
        <div className="buttons-container">
          <button onClick={ this.next }>Próximo</button>
          <button onClick={ () => this.arrayFilter('reset') }>Todos</button>
          <button onClick={ () => this.arrayFilter('Fire') }>Fogo</button>
          <button onClick={ () => this.arrayFilter('Psychic') }>Psychic</button>
        </div>
      </main>
    );
  }
}

export default Pokedex;