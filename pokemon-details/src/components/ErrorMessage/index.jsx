import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <section className={styles["error-message-container"]}>
      <p>{message}</p>
    </section>
  );
};

export default ErrorMessage;
