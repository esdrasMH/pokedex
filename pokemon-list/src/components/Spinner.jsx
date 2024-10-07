import styles from "./../styles/Spinner.module.css";

function Spinner() {
  return (
    <div className={styles["spinner-overlay"]}>
      <div className={styles["spinner"]}></div>
    </div>
  );
}

export default Spinner;
