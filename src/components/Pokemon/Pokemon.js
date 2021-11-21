import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { capitilizer } from "../../utils/utils.function";
import "./pokemon.scss";
import ProgressBar from "./ProgressBar";

const Pokemon = () => {
  let { pokemonName } = useParams();

  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        console.log(res.data);
        setPokemonData(res.data);
      });
  }, [pokemonName]);

  useEffect(() => {
    if (pokemonData) {
      const url = pokemonData.species.url;
      axios.get(url).then((res) => {
        console.log(res);
        setPokemonSpecies(res.data);
      });
    }
  }, [pokemonData]);

  return (
    <React.Fragment>
      <div className="pokemon-page">
        <div className="pokemon-page__info">
          <img
            className="pokemon-page__img"
            src={`https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`}
            alt="pokemon-img"
          />
          <div className="pokemon-page__name">{capitilizer(pokemonName)}</div>
          <div className="pokemon-page__type">
            {pokemonData &&
              pokemonData.types.map((item) => {
                return <p key={item.index}>{capitilizer(item.type.name)}</p>;
              })}
          </div>
        </div>
        <div className="pokemon-page__features">
          <div>
            <h2>Stats</h2>
            {pokemonData &&
              pokemonData.stats.map((item) => {
                return (
                  <div>
                    <ProgressBar done={item.base_stat} />
                  </div>
                );
              })}
            <h2>Abilities</h2>
            {pokemonData &&
              pokemonData.abilities.map((item) => {
                return (
                  <div>
                    <p>{capitilizer(item.ability.name)}</p>
                  </div>
                );
              })}
          </div>
          <div className="pokemon-page__moves">
            {pokemonData &&
              pokemonData.moves.map((item) => {
                return (
                  <div className="pokemon-page__move">
                    <p>{capitilizer(item.move.name)}</p>
                  </div>
                );
              })}
          </div>
          <div className="pokemon-page__species">
            {pokemonSpecies && (
              <div>
                <h2>Species</h2>
                <h2>Happiness</h2>
                <ProgressBar done={pokemonSpecies.base_happiness} />
                <h2>Capture Rate</h2>
                <ProgressBar done={pokemonSpecies.capture_rate} />
                <p>{`Color:  ${capitilizer(pokemonSpecies.color.name)}`}</p>
                <p>{`Habitat:  ${capitilizer(pokemonSpecies.habitat.name)}`}</p>
                <p>{`Is Baby: ${pokemonSpecies.is_baby ? "Yes" : "No"}`}</p>
                <p>{`Is Legendary: ${
                  pokemonSpecies.is_legendary ? "Yes" : "No"
                }`}</p>
                <p>{`Is Mythical: ${
                  pokemonSpecies.is_mythical ? "Yes" : "No"
                }`}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pokemon;
