import styles from "./PokemonSkillDetails.module.css";

function PokemonSkillDetails({ abilities }) {
  return (
    <div className={styles["pokemon-skill-details"]}>
      <h3>Habilidades</h3>
      <ul>
        {abilities?.map((a, i) => (
          <li key={i}>{a.ability?.name || "ND"}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonSkillDetails;
