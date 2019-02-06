import {getFirstAbility, convertPoundsToKilograms} from './Pokemon.service';
import React from 'react';

const emptyPokemon = {
    abilities: [],
    weight: 0
};
const pokemon = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ],
    weight: 50
};


describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    })
    it('Should return the first ability', () => {
        expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    })
});

describe('Tests for convertPoundsToKilograms', () => {
    it('Should return 0 if the weight is 0 pounds', () => {
        expect(convertPoundsToKilograms(emptyPokemon)).toEqual(0);
    })

    it ('Should return 23 if the weight is 50 pounds', () => {
        expect(convertPoundsToKilograms(pokemon)).toEqual(23);
    })
});