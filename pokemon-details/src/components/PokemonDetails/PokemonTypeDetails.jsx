import styles from "./PokemonTypeDetails.module.css";

function PokemonTypeDetails({ types }) {
  return (
    <div className={styles["pokemon-type-details"]}>
      <h3>Tipo</h3>
      <ul>
        {types?.map((t, i) => (
          <li key={i}>{t.type?.name || "ND"}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonTypeDetails;
