import styles from "./styles/DataFetchProcess.module.sass"

export default function DataFetchProcces({ error, loading }) {
  if (error) {
    return <div>Nastala chyba, zkuste obnovit stránku nebo mě kontaktujte</div>;
  } else if (loading) {
    return (
      <div className={styles.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return null;
  }
}
