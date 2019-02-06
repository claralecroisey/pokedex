export function getFirstAbility(pokemon) {
    if (pokemon.abilities.length === 0) {
        return null;
    } else {
        return pokemon.abilities[0].ability.name;
    }
}

export function convertPoundsToKilograms(pokemon) {
    return Math.round(pokemon.weight * 0.45359237);
}