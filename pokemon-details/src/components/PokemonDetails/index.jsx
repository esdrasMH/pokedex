import React, { useEffect, useState } from "react";
import { fetchPokemonDetails } from "./../../services/api";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import PokemonBasicDetails from "./PokemonBasicDetails";
import PokemonDimensionsDetails from "./PokemonDimensionsDetails";
import PokemonTypeDetails from "./PokemonTypeDetails";
import PokemonSkillDetails from "./PokemonSkillDetails";
import PokemonStatsDetails from "./PokemonStatsDetails";
import styles from "./PokemonDetails.module.css";

function PokemonDetails({ pokemonId }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonDetails(pokemonId);
        setPokemonDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pokemonId]);

  if (!loading && error) return <ErrorMessage message={error}></ErrorMessage>;

  return (
    <>
      {loading && <Spinner></Spinner>}
      <section className={styles["pokemon-details-container"]}>
        <PokemonBasicDetails
          id={pokemonDetails?.id}
          name={pokemonDetails?.name}
        ></PokemonBasicDetails>

        <div className={styles["responsive-container-details"]}>
          <PokemonDimensionsDetails
            height={pokemonDetails?.height}
            weight={pokemonDetails?.weight}
          ></PokemonDimensionsDetails>

          <div style={{ display: "flex" }}>
            <PokemonTypeDetails
              types={pokemonDetails?.types}
            ></PokemonTypeDetails>

            <PokemonSkillDetails
              abilities={pokemonDetails?.abilities}
            ></PokemonSkillDetails>
          </div>

          <PokemonStatsDetails
            stats={pokemonDetails?.stats}
          ></PokemonStatsDetails>
        </div>
      </section>
    </>
  );
}

export default PokemonDetails;
