// src/PokeDex.js
import React, { useEffect } from "react";
import {useAxios} from "./hooks";
import PokemonCard from "./PokemonCard";
import pokemonList from "./pokemonList";
import "./PokeDex.css";

function PokeDex() {
  const [pokemon, addPokemon] = useAxios("pokemon", "https://pokeapi.co/api/v2/pokemon/");

  useEffect(() => {
    pokemonList.forEach(p => addPokemon(data => data, p));
  }, [addPokemon]);

  return (
    <div className="PokeDex">
      <h3>Pokedex</h3>
      <div className="PokeDex-card-area">
        {pokemon.map((p, idx) => (
          <PokemonCard
            key={idx}
            front={p.sprites.front_default}
            back={p.sprites.back_default}
            name={p.name}
            stats={p.stats.map(stat => ({
              name: stat.stat.name,
              value: stat.base_stat
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
