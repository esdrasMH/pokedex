import styles from "./PokemonDimensionsDetails.module.css";

function PokemonDimensionsDetails({ height, weight }) {
  return (
    <div className={styles["pokemon-dimensions-details"]}>
      <div>
        <h3>Altura: </h3>
        <p>{height || "ND"}</p>
      </div>
      <div>
        <h3>Peso: </h3>
        <p>{weight || "ND"}</p>
      </div>
    </div>
  );
}

export default PokemonDimensionsDetails;
