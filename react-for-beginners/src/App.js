import Button from "./Button.js";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Wecome back!</h1>
      <Button text={"continue"}/>
    </div>
  );
}

export default App;
