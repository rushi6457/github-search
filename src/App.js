import Github from "./Component/Github";
// import "./styles.css";
import styles from "./Component/Github.module.css";
export default function App() {
  return (
    <div className={styles.App}>
      <Github />
    </div>
  );
}
