import React, { useState, useEffect } from "react";
import axios from "axios";
import "./content.scss";
import PokemonCard from "./PokemonCard";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";

const Content = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl).then((res) => {
      setLoading(false);
      setPokemon(res.data.results);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
    });
  }, [currentPageUrl]);

  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  if (loading) return <Loading />;

  return (
    <React.Fragment>
      <div className="card-container">
        {pokemon.map((item) => (
          <PokemonCard key={item.name} name={item.name} url={item.url} />
        ))}
      </div>
      <Button
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </React.Fragment>
  );
};

export default Content;
