import React, { Component } from 'react';
import { getFirstAbility, convertPoundsToKilograms } from '../Pokemon/Pokemon.service';

class DetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemon: {}
		};
		this.getPokemonDetails = this.getPokemonDetails.bind(this);
	}

	componentDidMount() {
		this.getPokemonDetails();
	}

	getPokemonDetails() {
		fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}/`)
			.then(res => res.json())
			.then((response) => {
			this.setState({
				pokemon: response
				});
			})
			.catch((error) => console.log(error));
	}

	render() {
		if (Object.keys(this.state.pokemon).length === 0) {
			return "No pokemon yet";
		}
		const pokemon = this.state.pokemon;
		return (
			<div className='pokemon-details'>
				<h4>Details of pokemon {pokemon.name}</h4>
				<img src={pokemon.sprites.front_default} alt={`Image of ${pokemon.name}`} />
				<p>First ability: {getFirstAbility(pokemon)}</p>
				<p>Weight: {convertPoundsToKilograms(pokemon)} kg</p>
				<p>Height: {pokemon.height}</p>
				<p>Base experience: {pokemon.base_experience}</p>
			</div>
		)
	}
}

export default DetailPage;
