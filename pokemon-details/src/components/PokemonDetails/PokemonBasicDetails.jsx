import styles from "./PokemonBasicDetails.module.css";
import { formatIndexNum, getMainImg } from "./../../utils";

function PokemonBasicDetails({ name, id }) {
  return (
    <div className={styles["pokemon-basic-details"]}>
      <h3>
        {name || "ND"} N° {formatIndexNum(id) || "ND"}
      </h3>
      <img src={getMainImg(id)} alt={`Perfil frontal de ${name || "ND"}`}></img>
    </div>
  );
}

export default PokemonBasicDetails;
