import React, { useEffect, useState } from "react";
import { fetchPokemonList } from "./../services/api";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import NoData from "./NoData";
import PokemonCard from "./PokemonCard";
import styles from "./../styles/PokemonCardList.module.css";

function PokemonCardList({ onSelectPokemon }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonList();
        setPokemonList(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!loading && error) return <ErrorMessage message={error}></ErrorMessage>;
  if (!loading && pokemonList.length === 0) return <NoData></NoData>;

  return (
    <>
      {loading && <Spinner></Spinner>}
      <section className={styles["pokemon-card-container"]}>
        {pokemonList.map((p, i) => (
          <PokemonCard
            key={p.name}
            index={i + 1}
            pokemon={p}
            onClick={() => onSelectPokemon(i + 1)}
          ></PokemonCard>
        ))}
      </section>
    </>
  );
}

export default PokemonCardList;
