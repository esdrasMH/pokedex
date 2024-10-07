import styles from "./PokemonStatsDetails.module.css";

function PokemonStatsDetails({ stats }) {
  return (
    <div className={styles["pokemon-stats-details"]}>
      <h3>Estadísticas</h3>
      <ul>
        {stats?.map((s, i) => (
          <li
            key={i}
            className={styles[`pokemon-stat-${s.stat?.name || "default"}`]}
          >
            {s.stat?.name || "ND"} {s.base_stat || "ND"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonStatsDetails;
