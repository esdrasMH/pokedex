import styles from "./../styles/ErrorMessage.module.css";

function ErrorMessage({ message }) {
  return (
    <section className={styles["error-message-container"]}>
      <p>{message}</p>
    </section>
  );
}

export default ErrorMessage;
