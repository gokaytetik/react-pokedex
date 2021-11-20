import React from "react";
import { capitilizer } from "../../utils/utils.function";
import "./pokemoncard.scss";

const PokemonCard = (props) => {
  const pokemonIndex = props.url.split("/")[props.url.split("/").length - 2];
  return (
    <React.Fragment>
      <div className="card">
        <div className="card__title">{`#${pokemonIndex}`}</div>
        <div className="card__image">
          <img
            src={`https://img.pokemondb.net/artwork/large/${props.name}.jpg`}
            alt="pokemon-img"
          />
        </div>
        <div className="card__footer">
          <h2>{capitilizer(props.name)}</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokemonCard;
