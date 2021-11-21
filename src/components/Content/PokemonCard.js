import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { capitilizer } from "../../utils/utils.function";
import axios from "axios";
import { Link } from "react-router-dom";
import "./pokemoncard.scss";

const PokemonCard = (props) => {
  const pokemonIndex = props.url.split("/")[props.url.split("/").length - 2];

  const [pokemonType, setPokemonType] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.names}`)
      .then((res) => {
        setPokemonType(res.data.types[0].type.name);
      });
  }, [props.names]);

  const type = pokemonType;

  return (
    <React.Fragment>
      <div className="card-container">
        <Link style={{ textDecoration: "none" }} to={`/pokemon/${props.names}`}>
          <div className="card">
            <div className={`card__title + ${type}`}>{`#${pokemonIndex}`}</div>
            <div className="card__image">
              <img
                src={`https://img.pokemondb.net/artwork/large/${props.names}.jpg`}
                alt="pokemon-img"
              />
            </div>
            <div className="card__footer">
              <h2>{capitilizer(props.names)}</h2>
              <p
                style={{ backgroundColor: "transparent" }}
                className={`${type}`}
              >
                {`Type:  ${type}`}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default PokemonCard;
