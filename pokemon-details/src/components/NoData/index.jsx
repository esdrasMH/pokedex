import styles from "./NoData.module.css";

function NoData() {
  return (
    <section className={styles["no-data-container"]}>
      <p>No hay datos disponibles de Pokémones</p>
    </section>
  );
}

export default NoData;
