import React, { useState, useEffect } from "react";
import axios from "axios";
import "./content.scss";
import PokemonCard from "./PokemonCard";

const Content = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemon(res.data.results);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="card-container">
        {pokemon.map((item) => (
          <PokemonCard key={item.name} name={item.name} url={item.url} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Content;
