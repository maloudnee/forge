import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.page}>
        <img src="/images/me-garland.png" alt="garland of me?? idk" className={styles.image}></img>
        <h1 className={styles.name}>Hey, I'm Mal</h1>
    </main>
  );
}
