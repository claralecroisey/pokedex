import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {getFirstAbility, convertPoundsToKilograms} from './Pokemon.service';

class Pokemon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemon: {}
		};
		this.getPokemon = this.getPokemon.bind(this);
	}

	getPokemon() {
		fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.idPokemon}/`)
			.then(res => res.json())
			.then((response) => {
				this.setState({
					pokemon: response
				});
			})
			.catch((error) => console.log(error));
	}
        
	componentDidMount() {
		this.getPokemon();
	}

	render(props) {
		if (Object.keys(this.state.pokemon).length === 0) {
			return "No pokemon yet";
		}

		const pokemon = this.state.pokemon;
		return (
			<div className='pokemon'>
				<h4>{pokemon.name}</h4>
				<img src={pokemon.sprites.front_default} alt={`Image of ${pokemon.name}`} />
				<p>First ability: {getFirstAbility(pokemon)}</p>
				<p>Weight: {convertPoundsToKilograms(pokemon)} kg</p>
				<Link to={`/detail_page/${pokemon.id}`}><p>Details</p></Link>
			</div>
		);
	}
}

export default Pokemon;
