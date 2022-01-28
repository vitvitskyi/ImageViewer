import { useState } from "react";
import SliderImg from "./components/sliderImg/sliderImg";
import SliderNav from "./components/sliderNav/sliderNav";

import styles from "./app.module.css";

function App() {
  const [variant, setVariant] = useState("grey-grey");
  const handleVar = (name) => {
    setVariant(name);
  };
  return (
    <main>
      <h1 className={styles.title}>Title</h1>
      <div className={styles.wrapper}>
        <SliderImg variant={variant} />
        <SliderNav handleVar={handleVar} />
      </div>
    </main>
  );
}

export default App;
