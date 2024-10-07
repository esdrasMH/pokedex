import { formatIndexNum, getMainImg } from "./../utils";
import styles from "./../styles/PokemonCard.module.css";

function PokemonCard({ index, pokemon, onClick }) {
  return (
    <article
      className={styles["pokemon-card"]}
      onClick={onClick}
      title={`Ir al detalle de ${pokemon.name || "ND"}`}
    >
      <p>{formatIndexNum(index)}</p>
      <img
        src={getMainImg(index)}
        alt={`Ir al detalle de ${pokemon.name || "ND"}`}
      />
      <h2>{pokemon.name || "ND"}</h2>
    </article>
  );
}

export default PokemonCard;
