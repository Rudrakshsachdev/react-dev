import { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles['calculator-container']}>
      <Display />
      <Buttons />
      
    </div>
  );
}

export default App;
